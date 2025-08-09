"use client";

import { useActionState, useState } from "react";
import RegisterAccessCodeForm from "./forms/code";
import RegisterMainForm from "./forms/main";
import { Register } from "./register";

export default function RegisterForm() {
    const [actionState, formAction] = useActionState(Register, null);
    const [accessCode, setAccessCode] = useState("");

    if (!accessCode) {
        return <RegisterAccessCodeForm setSubmitCode={setAccessCode} />;
    } else {
        return <RegisterMainForm />;
    }
}
