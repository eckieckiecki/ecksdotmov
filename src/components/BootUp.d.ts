declare module './BootUp.jsx' {
    const PreLoader: { [key: string]: string };
    export default PreLoader;
  }
  declare const BootUp: React.FC<{ progress?: number }>;
  export default BootUp;