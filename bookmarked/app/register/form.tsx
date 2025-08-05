"use client";

import { faAsterisk } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useActionState } from "react";
import { Register } from "./register";
import RegisterAccessCodeForm from "./forms/code";
import RegisterMainForm from "./forms/main";

export default function RegisterForm() {
    const [actionState, formAction] = useActionState(Register, null);

    return (
     <>
       <RegisterAccessCodeForm/>
       {/*<RegisterMainForm/> */}
       </>
    );
}
