import { useResolve } from "@wox-team/wox-inject";
import { AppRoutes } from "./routes";
import { TitleBar } from "@component/title_bar";
import { ListingService } from "../internal/domain/listing/listing_service";
import { LocalDatabase } from "../internal/domain/database/local_database";
import { useEffect } from "react";

export function App() {
  useResolve(ListingService);
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
