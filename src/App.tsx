import "./App.css";
// 
import { ChakraProvider, useToast } from "@chakra-ui/react";
// routes 
import MainRoutes from "~/routers/main.routes";
// layout 
import LayoutComponent from "~/components/layout/layout.component";
import { SWRConfig } from "swr";
import { getValidationError } from "./utilities/get-validation-error";

function App() {
  const toast = useToast();
  return (
    <ChakraProvider>
      <SWRConfig value={{
        onError: (error, key) => {
          toast({description: error?.message, status: 'error'})
        }}}>
      <LayoutComponent children={<MainRoutes/>} />
      </SWRConfig>
    </ChakraProvider>
  );
}

export default App;
