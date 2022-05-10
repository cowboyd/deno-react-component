export default function (bundle) {
  return Deno.emit(
    bundle,
    {
      bundle: "module",
      compilerOptions: {
        lib: ["dom", "dom.iterable", "esnext"],
      },
      importMap: {
        "imports": {
          "react": "https://esm.sh/react@18?dev",
          "react-dom": "https://esm.sh/react-dom@18?dev",
          "react-dom/server": "https://esm.sh/react-dom@18/server?dev",
          "react-dom/client": "https://esm.sh/react-dom@18/client?dev"
        }
      },
      importMapPath: 'file:///import-map.json'
    }
  )
}