import { useResolve } from "@wox-team/wox-inject";
import { AppRoutes } from "../app/_routes";
import { TitleBar } from "@component/title_bar";
import { ListingService } from "../internal/domain/listing/listing_service";
import { LocalDatabase } from "../internal/domain/database/local_database";
import { useEffect } from "react";
import { BackgroundListner } from "internal/background_listner";

export function App() {
  useResolve(ListingService);
  useResolve(BackgroundListner);
  const localDatabase = useResolve(LocalDatabase);

  useEffect(() => {
    localDatabase.open();
  }, [localDatabase]);

  return (
    <>
      <TitleBar />
      <AppRoutes />
    </>
  );
}
