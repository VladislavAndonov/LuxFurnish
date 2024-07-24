import CtaButton from "../components/CtaButton";

export default function Home() {
    return (
        <div className="home-background m-auto">
            <div className="container mx-auto p-4 text-black">
                <h1 className="text-3xl font-bold">Welcome to LuxFurnish</h1>
                <p className="text-1xl">Elegance in every corner.</p>
                
                <CtaButton />
            </div>
        </div>
    );
}