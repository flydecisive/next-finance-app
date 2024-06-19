"use client";
import { useState } from "react";

import PageLayout from "../layout";
import WalletsLeft from "./left/WalletsLeft";
import WalletsRight from "./right/WalletsRight";

export default function WalletsPage() {
  return <PageLayout left={<WalletsLeft />} right={<WalletsRight />} />;
}
