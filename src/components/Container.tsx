import { ReactNode } from "react";

export default function Container({children} : {children: ReactNode | ReactNode[] | null}) {
    return (
        <div className="mx-auto max-w-screen-xl w-full px-2.5 md:px-20 h-screen">
            {children}
        </div>
    )
}