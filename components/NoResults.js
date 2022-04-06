export default function NoResults() {
  return (
    <div className="bg-gray-50 p-16 text-center">
      <img
        className="block h-36 w-36 mx-auto"
        src="/bot.png"
        alt="Workflow"
        color="#f9ac45"
      />
      <h2 className="text-gray-900 font-semibold my-2">Sense resultats</h2>
      <p className="text-sm">No s'ha trobat res, proba d'una altra manera!</p>
    </div>
  );
}
