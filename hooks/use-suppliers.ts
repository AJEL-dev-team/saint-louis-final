
import React from "react";
import { useQuery , useMutation , useQueryClient } from "@tanstack/react-query";
// import { viewSupplier } from "@/utils/api/actualites";
import { fetchActualites,createActualites , editActualites, viewActualites ,deleteActualites } from "@/utils/apis/actualites";

// # TODO : use a react toaster 
// import { useToast } from "@/components/ui/use-toast"

export const useActualites = (enable:boolean = false , id:number|null = null) => {
    const [isSuccess, setIsSuccess] = React.useState(false);
    const [errorMessage, setErrorMessage] = React.useState("");
    const queryClient = useQueryClient();
    // const { toast } = useToast()

    const {data:actualites , isLoading :allLoading ,error:allFetchError , refetch} = useQuery({
        queryKey : ['actualites'],
        queryFn: fetchActualites,
        staleTime: 300000,
        enabled: !enable,
    })


    const {data:oneSupplier , isLoading:singleLoading ,error:singleFetchError } = useQuery({
        queryKey : ['viewSupplier',id],
        queryFn: viewActualites,
        staleTime: 300000,
        enabled: !enable && id !== null,

    })

    const {mutate:addSupplierMutation, isPending:isAddingSupplier} = useMutation({
        mutationFn: createActualites,
        onSuccess: () => {
            queryClient.invalidateQueries(["actualites"])
            setIsSuccess(true);
            // toast({
            //   title: "actualites saved",
            //   description: "...........",
            // })
          },
          onError: (error: { message: React.SetStateAction<string>; }) => {
            setErrorMessage(error.message)
            // toast({
            //   title: "Uh oh! Something went wrong.",
            //   description: "There was a problem with your request.",
            // })
            // console.error("Error occurred during registration:", error);
          },
    })


    
    const {mutate:editSupplierMutation, isPending:isEditingSupplier} = useMutation({
        mutationFn: editActualites,
        onSuccess: () => {
            queryClient.invalidateQueries(["actualites"])
            // toast({
            //   title: "actualites edited",
            //   description: "...........",
            // })
            setIsSuccess(true);
          },
          onError: (error: { message: React.SetStateAction<string>; }) => {
            setErrorMessage(error.message)
            // toast({
            //   title: "Uh oh! Something went wrong.",
            //   description: "There was a problem with your request.",
            // })
            // console.error("Error occurred during registration:", error);
          },
    })


    const {mutate:deleteSupplierMutation, isPending:isDeletingSupplier} = useMutation({
        mutationFn: deleteActualites,
        onSuccess: () => {
            queryClient.invalidateQueries(["actualites"])
            // toast({
            //   title: "actualites deleted",
            //   description: "...........",
            // })
            setIsSuccess(true);
          },
          onError: (error: { message: React.SetStateAction<string>; }) => {
            setErrorMessage(error.message)
            // toast({
            //   title: "Uh oh! Something went wrong.",
            //   description: "There was a problem with your request.",
            // })
            // console.error("Error occurred during registration:", error);
          },
    })




    const addSupplier = async (newSupplier: any)=>{
            await  addSupplierMutation(newSupplier); 
    }

    const modifySupplier = async (editSupplier: any)=>{
        await  editSupplierMutation(editSupplier); 
    }

    const deletingSupplier = async (id: any)=>{
        await  deleteSupplierMutation(id); 
    }

    return {
        actualites,
        allLoading,
        allFetchError,

        oneSupplier,
        singleLoading,
        singleFetchError,

        addSupplier,
        isAddingSupplier,

        
        modifySupplier,
        isEditingSupplier,

        deletingSupplier,
        isDeletingSupplier,

        isSuccess,
        errorMessage,
    }


}

