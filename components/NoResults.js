import Image from "next/image"

export default function NoResults() {
  return (
    <div className="bg-gray-50 p-16 text-center">
      <Image
        width={144}
        height={144}
        className="block h-36 w-36 mx-auto"
        src="/bot.png"
        alt="Workflow"
        color="#f9ac45"
      />
      <h2 className="text-gray-900 font-semibold my-2">Sense resultats</h2>
      <p className="text-sm">No s&apos;ha trobat res, proba d&apos;una altra manera!</p>
    </div>
  );
}
