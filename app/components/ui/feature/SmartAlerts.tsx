const SmartAlerts = () => {
  const alerts = [
    { title: "Garde urgente - SOS Médecins", type: "Urgence", active: true },
    { title: "Nouveau contrat signé (Dr. Martin)", type: "Admin", active: true },
    { title: "Rappel : Renouvellement RCP", type: "Rappel", active: false },
  ];

  return (
    <div className="bg-[#F9FAFB] rounded-3xl p-8 border border-gray-100 h-full">
      <h3 className="text-xl font-bold text-gray-900 text-center mb-2">Alertes Intelligentes</h3>
      <p className="text-sm text-gray-500 text-center mb-8">
        Ne manquez aucune opportunité grâce aux notifications push filtrées selon vos critères.
      </p>
      
      <div className="space-y-4">
        {alerts.map((alert, i) => (
          <div key={i} className="bg-white p-4 rounded-xl flex justify-between items-center shadow-sm">
            <div>
              <p className="text-sm font-bold text-gray-800">{alert.title}</p>
              <p className="text-xs text-gray-400">{alert.type}</p>
            </div>
            <div className={`w-10 h-5 rounded-full relative transition-colors ${alert.active ? 'bg-[#004838]' : 'bg-gray-200'}`}>
               <div className={`absolute top-1 w-3 h-3 bg-white rounded-full transition-all ${alert.active ? 'left-6' : 'left-1'}`} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SmartAlerts;