import { signal } from "@preact/signals-react";
import { Container, Injectable, useResolve } from "@wox-team/wox-inject";
import Quill, { type Delta as QuillDelta, EmitterSource } from "quill";
import "./rich_textarea.css";
import { Flex } from "@ui";

export interface RichTextareaProps {
  autoFocus?: boolean;
  defaultValue?: Nullable<string>;
  onChange?: (
    ...args: [delta: Delta, oldContent: Delta, source: EmitterSource]
  ) => void;
}

export function RichTextarea(props: RichTextareaProps) {
  "use container";

  // @ts-ignore
  const p = props[0];

  return <RichTextareaRaw {...p} />;
}
RichTextarea.raw = RichTextareaRaw;

function RichTextareaRaw(props: RichTextareaProps) {
  const controller = useResolve(RichTextareaController);

  return (
    <Flex h="full" p="4" onClick={() => void controller.handleClick()}>
      <div ref={controller.ref(props)} />
    </Flex>
  );
}

@Injectable()
export class RichTextareaController {
  editor = signal<Quill | null>(null);

  #props: Nullable<RichTextareaProps> = null;

  public createEditor(element: HTMLElement, defaultValue: Nullable<string>) {
    const quill = new Quill(element, {
      theme: "snow",
      placeholder: "Write something...",
      modules: {
        toolbar: [],
      },
    });

    if (defaultValue != null) {
      try {
        const delta = JSON.parse(defaultValue);
        quill.setContents(delta);
      } catch {
        // Ignore
      }
    }

    quill.on("text-change", (...args) => {
      this.#props?.onChange?.(...args);
    });

    this.editor.value = quill;
  }

  public handleClick() {
    console.log(this);
    const v = this.editor.peek();
    v?.focus();
  }

  public ref(props: RichTextareaProps) {
    this.#props = props;

    return (element: HTMLElement | null) => {
      if (this.editor.peek() != null) return;
      if (element != null) {
        this.createEditor(element, props.defaultValue ?? null);

        if (this.#props?.autoFocus) {
          const editor = this.editor.peek();

          editor?.setSelection(editor.getLength(), 0);

          (editor?.container as HTMLDivElement)
            .closest("[data-radix-scroll-area-viewport]")
            ?.scroll(0, 0);
        }
      }
    };
  }
}

export type Delta = QuillDelta;
