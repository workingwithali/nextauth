import { BsCheck2Circle } from "react-icons/bs";

interface FormSuccessProps {
    message?:string;
};
export const FormSuccess =({message}:FormSuccessProps)=>{
    if (!message) return  null;
    return(
        <div className="bg-emerald-500/15 p-3 rounded-md flex items-center text-sm gap-x-2 text-emerald-500">
            <BsCheck2Circle className="h-4 w-4"/>
            <p>{message}</p>
        </div>
    ) 
}