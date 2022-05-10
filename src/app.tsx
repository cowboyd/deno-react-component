import React, { lazy, Suspense } from "react";
import { Helmet } from "react-helmet";
import { Route } from "wouter";
import { SWRConfig } from "swr";
import ultraCache from "ultra/cache";
import { Component } from './component.tsx';

const Ultra = ({ cache }) => {
  return (
    <SWRConfig value={{ provider: () => ultraCache(cache) }}>
      <Helmet>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <meta charset="UTF-8" />
        <link rel="stylesheet" href="/style.css?react18" />
        <title>no bundle</title>
      </Helmet>
      <Suspense fallback={null}>
        <main>
          <Route path="/">
            <Component />
          </Route>
        </main>
      </Suspense>
    </SWRConfig>
  );
};

export default Ultra;