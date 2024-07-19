"use client";
import { usePathname } from "next/navigation";

const CurrentPathName = () => {
    const pathname = usePathname();
    return (
        <div className="text-center text-4xl font-bold font-serif">
            {pathname}
        </div>
    );
};
CurrentPathName.displayName = "CurrentPathName";
export default CurrentPathName;