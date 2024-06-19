"use client";
import HomeLayout from "@/layout/Layout";

import React, { ReactNode } from "react";

const InterviewQAProvider = ({ children }: { children: ReactNode }) => {
  return <HomeLayout>{children}</HomeLayout>;
};

export default InterviewQAProvider;
