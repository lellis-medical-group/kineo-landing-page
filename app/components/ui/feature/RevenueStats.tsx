const RevenueStats = () => {
  return (
    <div className="bg-[#F9FAFB] rounded-3xl p-8 flex flex-col md:flex-row gap-8 border border-gray-100">
      <div className="flex-1">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Tableau de bord financier</h3>
        <p className="text-gray-600 mb-8 max-w-sm">
          Kineo calcule automatiquement vos rétrocessions et génère vos rapports d'activité en temps réel pour votre comptabilité.
        </p>
        <button className="bg-[#004838] text-[#E2FB6C] px-6 py-3 rounded-full font-bold text-sm hover:opacity-90 transition-all">
          Voir mes revenus
        </button>
      </div>

      <div className="flex-1 bg-white rounded-2xl p-6 shadow-sm border border-gray-50">
        <div className="flex justify-between items-end h-40 gap-2">
          {[40, 70, 45, 90, 65, 80, 50].map((h, i) => (
            <div key={i} className="flex-1 bg-gray-100 rounded-t-sm relative group">
              <div
                style={{ height: `${h}%` }}
                className={`w-full absolute bottom-0 rounded-t-sm transition-all ${h > 80 ? 'bg-[#004838]' : 'bg-gray-200 group-hover:bg-[#E2FB6C]'}`}
              />
            </div>
          ))}
        </div>
        <div className="mt-4 flex justify-between text-[10px] font-bold text-gray-400 uppercase tracking-widest">
          <span>Lun</span><span>Mar</span><span>Mer</span><span>Jeu</span><span>Ven</span><span>Sam</span><span>Dim</span>
        </div>
      </div>
    </div>
  );
};

export default RevenueStats;