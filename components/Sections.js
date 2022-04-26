/* This example requires Tailwind CSS v2.0+ */
import {CursorClickIcon, EmojiHappyIcon, FireIcon, MusicNoteIcon} from '@heroicons/react/solid'
import Link from "next/link";

const features = [
  {
    name: 'Jocs',
    description:
      "Troba el joc ideal! Busca entre els més de 150 jocs, ja sigui per edats, participants o etiquetes. Escull els teus jocs preferits, o crea el teu propi joc, per poder utilitzar-lo més tard!",
    icon: EmojiHappyIcon,
    value: "list"
  },
  {
    name: 'Tendéncies',
    description:
    `Descobreix aquí la llista top 30 de jocs que millor funcionen! Jocs fàcils de realitzar i de tot tipus, per pasar-ho bé tan l'infant com el monitor!`,
    icon: FireIcon,
    value: "topgames"
  },
  {
    name: 'Cançoner',
    description:
      'Troba la teva cançó ideal per al moment!',
    icon: MusicNoteIcon,
    value: "songs"
  },
  {
    name: 'Desestressador',
    description:
      "Si el teu grup de nens no et fa cas, no et preocupis ! Desestresa't aquí fins que es calmin",
    icon: CursorClickIcon,
    value: "desestressador"
  },
]

export default function Example() {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
        <img
            className="block h-12 w-12 mx-2 "
            src="/SimpleLog.png"
            alt="Workflow"
          />
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Bogd.app</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Troba l'activitat ideal!
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Aquí podràs trobar l'activitat o cançó ideal per al teu grup d'infants segons les edats/participants/característiques. A més a més, si no et fan cas, també et podrás desfogar! 😉
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <Link href={`/activity/${feature.value}`}
              >
              <div key={feature.name} className="relative hover: cursor-pointer">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
              </div>
              </Link>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
