import React from 'react';
import FeatureCard from './FeatureCard';
import MatchingUI from './feature/MatchingUI';
import FinancialUI from './feature/FinancialUI';
import ContractUI from './feature/ContractUI';
import ChatUI from './feature/ChatUI';
import ReviewsUI from './feature/ReviewsUI';
import HandoffUI from './feature/HandoffUI';
import HousingUI from './feature/HousingUI';
import SmartAlerts from './feature/SmartAlerts';

const FeatureGrid = () => {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-bold text-[#004838] mb-6 tracking-tight">
                        Gérez votre carrière <br />
                        <span className="text-gray-400">comme une entreprise.</span>
                    </h2>
                    <p className="text-gray-500 text-lg font-medium">
                        Une suite d'outils interconnectés pour remplacer sans la charge mentale.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <FeatureCard
                        title="Matching Intelligent"
                        description="Algorithme croisant disponibilités, logiciel et affinités."
                        badge="IA POWERED"
                        className="lg:col-span-3"
                    >
                        <div className="w-full max-w-2xl flex justify-center">
                            <MatchingUI />
                        </div>
                    </FeatureCard>

                    <FeatureCard
                        title="Systeme d'alertes"
                        description="La communication entre confrères."
                        className="lg:col-span-3"
                    >

                        <SmartAlerts />
                    </FeatureCard>

                    <FeatureCard
                        title="Revenus & Compta"
                        description="Suivi du CA et prévision URSSAF."
                        className="lg:col-span-1"
                    >
                        <FinancialUI />
                    </FeatureCard>

                    <FeatureCard
                        title="Juridique Auto."
                        description="Contrats CNOM signés en 1 clic."
                        className="lg:col-span-1"
                    >
                        <ContractUI />
                    </FeatureCard>

                    <FeatureCard
                        title="Logement Inclus"
                        description="Repérez les cabinets offrant un hébergement."
                        badge="Carte Interactive"
                        className="lg:col-span-1"
                    >
                        <HousingUI />
                    </FeatureCard>

                    <FeatureCard
                        title="Cahier de Liaison"
                        description="Notes vocales sécurisées pour le suivi patient."
                        className="lg:col-span-1"
                    >
                        <HandoffUI />
                    </FeatureCard>

                    <FeatureCard
                        title="Chat HDS"
                        description="Messagerie chiffrée santé."
                        className="lg:col-span-1"
                        badge="END TO END"
                    >
                        <ChatUI />
                    </FeatureCard>

                    <FeatureCard
                        title="Avis Vérifiés"
                        description="La transparence entre confrères."
                        className="lg:col-span-1"
                    >
                        <ReviewsUI />
                    </FeatureCard>
                </div>
            </div>
        </section>
    );
};

export default FeatureGrid;