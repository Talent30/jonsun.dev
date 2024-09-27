/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import-x/no-unresolved */
// @ts-nocheck
import { createPagesFunctionHandler } from "@remix-run/cloudflare-pages";

import * as build from "../build/server";

export const onRequest = createPagesFunctionHandler({ build });
