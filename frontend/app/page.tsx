
import CardImageLeft from "@/components/cards/cardLeft";
import CardImageRight from "@/components/cards/cardRight";
import CardImageApresentation from "@/components/cards/cardApresentation";
import HeroSection from "@/components/home";

export default function home() {
    return(
        <div className="bg-gray-100 min-h-screen p-0 py-4">
            <HeroSection/>
            <CardImageLeft
                title="Quem somos?"
                description={` Uma marca reconhecida pelo padrão superior:
                      A  Drogaria Varella é uma marca consolidada no ramo de drogarias, seu padrão de qualidade é elevado em todos os apectos, desde o layout de loja ao atendimento no balcão.
                      O resultado desse esforço é a contínua expansão da rede, a conquista de centenas de clientes e o carinho e lembrança do consumidor que aumentam a cada dia.`}
                image="/cardLeft1.png"
            /> 
            <CardImageRight
                title="Por que investir?"
                description={`O varejo farmaceutico no Brasil é um setor imune à crises e com enorme potencial de crescimento.
                     Em épocas de crises, quando a economia atinge o mercado de forma generalizada, o segmento farmacêutico é o último a ser afetado e o primeiro a se recuperar. A decisão de compra desses produtos não pode ser adiada!`}
                image="/cardRight.png"
            /> 
            <CardImageApresentation/>
        </div>
    );
}