import { Differential } from "@differential-dev/sdk";
import * as machine from "./machine";

export const d = Differential({
  apiKey: "123",
  apiSecret: "456",
  environmentId: "dev-2",
});

export const listen = (machineType: string) => {
  d.listen({
    machineTypes: [machineType],
  });
};