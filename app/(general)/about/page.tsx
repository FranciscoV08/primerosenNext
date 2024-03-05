import type {Metadata} from "next";

// Metatag para esta pagina de about MR (METADATA)
export const metadata: Metadata = {
 title: 'Tu about',
 description: 'SEO Description',
 keywords:['AboutPage', ]
};

export default function AboutPage() {
    return(
        <>
        <main className="flex flex-col items-center p-24 ">
            <span className="text-lg"> Hola Mundo</span>
            <span className="text-7xl">About Page</span>
        </main>
        </>
    )
}


// Contact
// Pricin