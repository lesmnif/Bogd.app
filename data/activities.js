const activities = [
  {
    id: 1,
    title: "El món explotarà... què m'emporto?",
    descripció:
      "Dinàmica per treballar els diferents rols que podem desenvolupar en un grup",
    participants: "15-20",
    edats: "12-15 anys",
    espai: "Interior",
    durada: "1 h / 1h 30mins ",
    edatmin: 12,
    edatmax: 15,
    participantsmin: 15,
    participantsmax: 20,
    objectiusMoni: (
      <div>
        <ul>
          <li>
            · Identificar els diferents rols que juguen les persones que formen
            part del grup.
          </li>
          <li>
            · Aprofundir en el treball de la comunicació a través de l’escolta
            activa, l’empatia i l’assertivitat.
          </li>
        </ul>
      </div>
    ),
    objectiusInf: (
      <div>
        <ul>
          <li>· Escoltar activament les propostes dels companys.</li>
          <li>
            · Expressar-se davant dels altres de manera oberta i respectuosa.
          </li>
          <li>· Reflexionar sobre un mateix.</li>
          <li>· Sentir-se identificat amb el grup.</li>
        </ul>
      </div>
    ),
    material: "Llapis i paper",
    introducció:
      "Aquesta dinàmica la començarem de manera individual, la seguirem fent en grup petit i, finalment, interactuaran tots els membres del grup de manera conjunta.",
    desenvolupament: `Expliquem als nois i noies que el món en què vivim és a punt d’explotar i que ells han estat seleccionats per la NASA per anar a un altre món que té les mateixes característiques que aquest però és completament verge. No hi ha res edificat, no hi ha corrent elèctric... Els han seleccionat però cadascun d’ells agafarà un coet diferent i anirà a parar a un espai determinat d’aquest nou planeta, sol... tot i que amb el temps possiblement trobi algú altre allà. 

        Cal que es preparin la llista de l’equipatge que s’enduran però han de tenir en compte que han de desglossar el material en una llista i hi han de posar el pes de cada cosa al costat, que el pes de tot plegat ha de fer exactament 100Kg i que no poden portar cap ésser viu. 
        
        Podem proposar que el trajecte dura 24 hores. 
        
        Quan els nois i noies ja han fet la llista –els costarà posar pes a l’equipatge per separat– se’ls comunica que hi ha hagut un error i que resulta que en els coets hi hauran d’anar per parelles però que el pes total que haurà de portar cada coet és de 100Kg. Si pensem que les llistes de la primera ronda les han fet mirant què escrivia el company del costat els podem fer canviar de lloc per començar de zero la nova llista amb un altre company. Caldrà, doncs, que es posin d’acord per a veure què s’emporten. 
        
        Quan s’hagin posat d’acord els tornem a dir que hi ha hagut un nou error i que aquest cop han de fer grups de 4 o de 6. Anem observant el desenvolupament de la dinàmica. 
        
        Finalment, els diem que han de marxar tots junts i, per tant, cal que es posin d’acord per a veure què s’emporten tenint en compte que només poden portar 100 Kg de pes entre tots i totes.`,
    avaluació: (
      <div>
        <ul>
          <li>
            · És important ser àgils perquè sinó la dinàmica es pot fer pesada.
          </li>
          <li>
            · Al final de la dinàmica podem preguntar als alumnes: com s’han
            sentit i què els ha semblat més difícil.
          </li>
          <li>
            · Altres preguntes a treballar: qui no ha parlat i per què? Qui ha
            parlat molt i per què? Qui no s’ha sentit escoltat? Qui ha fet
            propostes i han estat desestimades? Algú ha liderat el grup i per
            què pensem que és un líder?
          </li>
          <li>
            · Durant la dinàmica nosaltres podem veure com es relacionen els
            joves entre ells i al final, quan fem el torn de preguntes, són ells
            mateixos els qui poden reflexionar sobre les seves pròpies
            aportacions i la seva manera de fer.
          </li>
        </ul>
      </div>
    ),
    etiquetes: ["Competitiu", "Cooperatiu", "Grans jocs", "Interior"],
    isFavorite: false,
  },
  {
    id: 2,
    title: "La línia perillosa",
    descripció:
      "Joc en què un equip ha de canviar de camp i l'altre equip ha d'intentar evitar-ho.",
    participants: "10+. Mín 5 per equip",
    edats: "9-11 anys",
    espai: "Interior gran o exterior",
    durada: "10mins",
    edatmin: 9,
    edatmax: 11,
    participantsmin: 10,
    participantsmax: 50,
    objectiusMoni: (
      <div>
        <ul>
          <li>· Potenciar la confiança entre els infants.</li>
          <li>· Treballar la cooperació entre els membres del mateix equip.</li>
        </ul>
      </div>
    ),
    objectiusInf: (
      <div>
        <ul>
          <li>· Guanyar confiança en un mateix.</li>
          <li>· Saber-se orientar per l'espai.</li>
        </ul>
      </div>
    ),
    material: "Mocadors, guix",
    introducció:
      "Aquest joc el podem fer en qualsevol lloc sempre i quan quedi ben delimitat i no hi hagi obstacles amb què els infants puguin fer-se mal. Hem de dividir els infants en dos grups iguals.",

    desenvolupament: `Delimitem la zona de joc marcant dos espais iguals i dividits per una línia marcada al terra. Un equip es posa en un dels espais i ha de passar a l'altre espai de joc per anar a recollir algun objecte concret: mocador, tresor, bandera... L'altre equip es col·loca a sobre de la línia marcada al terra amb els ulls tapats. Mentre el primer equip intenta passar de camp i agafar l'objecte, el segon equip, amb els ulls tapats, intenta atrapar els jugadors de l'equip contrari quan passen per allà. Els jugadors que siguin atrapats passen a formar part de l'equip que té els ulls tapats. Guanya l'equip que aconsegueix assolir el seu objectiu de joc.`,
    avaluació:
      "Un cop feta una partida, es pot fer un canvi de papers dels jugadors perquè cadascun d'ells expliqui com s'ha sentit i quin paper li ha agradat més. Si veiem que l'espai de joc és massa petit el podem fer més gran. En funció de l'edat dels infants, podem anar afegint normes per fer-lo més complicat o buscant un espai més petit i recollit per a fer-lo més fàcil. També es pot fer que els objectes a agafar siguin més d'un.",
    etiquetes: ["Competitiu", "Coneixença", "Exterior", "Grans jocs"],
    isFavorite: false,
  },
  {
    id: 3,
    title: "Fem caure la muralla",
    descripció:
      "Cada equip haurà d’enderrocar la muralla de l’equip contrari amb l’ajuda de xeringues d’aigua abans no ho aconsegueixi el rival.",
    participants: "Dos equips de 15",
    edats: "4-18 anys",
    espai: "Exterior",
    edatmin: 4,
    edatmax: 18,
    participantsmin: 30,
    participantsmax: 50,
    durada: "1h",
    objectius: (
      <div>
        <ul>
          <li>· Aprendre a treballar en equip.</li>
          <li>· Aprendre a decidir col·lectivament.</li>
          <li>· Aprendre a respectar les normes.</li>
          <li>· Desenvolupar la motricitat</li>
        </ul>
      </div>
    ),

    material:
      "Xeringues d'aigua(una per participant, 2 galledes d'aigua, colorant per l'aigua, cordill, cinta adhesiva, paper de wàter",
    introducció:
      "Es tracta d’un joc exterior d’estiu en el qual es combinen estratègia, treball en equip, motricitat i aigua.",

    desenvolupament: `Es formen dos equips amb el mateix nombre de persones. Cadascun d’ells escull una base d’on penjarà la seva muralla: un cordill lligat entre dos punts i del qual penjaran 15 o més trossos de paper de wàter. Per evitar que aquests paperets volin, se’ls pot penjar un petit pes.

        L’objectiu de cada equip és trencar el paper de wàter de l’equip adversari, però només amb l’ajuda de xeringues d’aigua (tenyida de colors). Per aconseguir-ho, han de disparar des d’una distància mínima de 3 metres (i mai a la cara). Alguns membres de l’equip es poden situar entremig per evitar amb el cos que l’aigua arribi al paper. Per recarregar les xeringues, cada equip té una galleda a la seva pròpia base que es pot anar reomplint (o no).`,
    avaluació: (
      <div>
        <ul>
          <li>
            · Quina ha estat la clau per aconseguir fer caure la muralla? S’ha
            treballat en equip o tothom ha fet el que ha volgut? En aquest segon
            cas, el més probable és que s’hagi deixat la base descoberta i que
            el rival hagi pogut disparar a plaer.
          </li>
          <li>
            · Com s’ha decidit l’estratègia: hi ha hagut un líder o més aviat al
            contrari? Era autoritari?
          </li>
          <li>
            · Qui es quedava a defensar i qui no? Eren sempre els mateixos? Hi
            ha hagut cap diferència entre nens i nenes? Per què?
          </li>
          <li>
            · Es tracta d’un joc amb escasses normes, però determinants: Quin
            sentit tenien? S’han respectat?
          </li>
        </ul>
      </div>
    ),
    etiquetes: ["Competitiu", "Exterior"],
    isFavorite: false,
  },
  {
    id: 4,
    title: "Campionat de sumo",
    descripció: "Un joc ben curiós que ens recordarà a un esport japonès",
    participants: "4",
    edats: "4-18 anys",
    edatmin: 4,
    edatmax: 18,
    participantsmin: 4,
    participantsmax: 20,
    espai: "Preferible exterior",
    durada: "1h",

    objectius: (
      <div>
        <ul>
          <li>
            · Recuperar de la memòria aquells jocs que antigament es practicaven
            als carrers.
          </li>
          <li>· Fomentar el desenvolupament d'habilitats motrius.</li>
          <li>
            · Desenvolupar la imaginació per jugar amb material poc
            convencional.
          </li>
        </ul>
      </div>
    ),

    material: (
      <div>
        <ul>
          <li>
            · Xapes: són un material de rebuig molt fàcil d?aconseguir. Si ens
            apropem a qualsevol bar del nostre poble o ciutat, segur que ens en
            donaran una bossa ben plena.
          </li>
          <li>
            · Guix o un palet: si juguem sobre una superfície asfaltada,
            necessitarem un guix per delimitar el terreny de joc; en canvi, si
            ho fem al terra amb l'ajuda d'un palet podrem dibuixar-lo.
          </li>
          <li>
            · Plastilina: posarem una mica de plastilina sota la xapa perquè no
            llisqui en excés a l'hora de jugar.
          </li>
        </ul>
      </div>
    ),
    introducció: `Els jocs tradicionals són jocs que es transmeten de generació en generació. Per les situacions socials i històriques, es practicaven als carrers dels pobles i ciutats. No hem d'oblidar que n'hi ha molts que es duien a terme en zones amb una certa situació econòmica desfavorable i això obligava els nens i nenes a desenvolupar la imaginació per jugar amb les poques coses de què disposaven.
        Abans de començar amb el joc us recomanem una activitat perquè cada infant pugui personalitzar les seves xapes. Amb retoladors, pintura plàstica, paper de seda o paper "pinotxo" podem decorar les xapes i fer que l'infant es motivi i vegi que ell també col·labora a l'hora de preparar el joc.`,

    desenvolupament: `Per començar, dibuixarem al terra un cercle d'uns 50 cm de diàmetre, dins del qual dibuixarem quatre ratlles en forma de quadrat, però sense les cantonades, d'uns 10 cm de costat, que faran de línia de sortida per a les xapes dels participants.
        Cada jugador situarà les seves tres xapes en una línia dins del cercle.
        Després es concretarà un ordre de tir. Cada tirada serà un torn per jugador, on podrà escollir quina xapa colpejarà. L'objectiu del joc és fer fora del cercle les xapes dels altres.
        En el moment en què algú faci fora una xapa contrària, continuarà amb el seu torn. La xapa que surti fora del cercle quedarà eliminada, sigui del jugador que colpeja o d'un altre jugador.
        El jugador o jugadora que aconsegueixi restar amb alguna xapa al cercle guanyarà la partida.`,
    avaluació:
      "Si desitgem fer aquesta activitat un dissabte d'esplai o amb un grup nombrós, sempre podem començar tots junts amb el taller de personalitzar les xapes i després organitzar diferents partides a mode de campionat amb rondes de classificació, però recordeu que si el que volem és passar una bona estona el que haurem de fer és evitar qualsevol rivalitat i donar unes pautes ben clares per tal d'impedir que la competitivitat sigui un objectiu per als participants.",
    etiquetes: ["Competitiu", "Exterior"],
    isFavorite: false,
  },
  {
    id: 5,
    title: "Kubb",
    descripció: "Tira les ampolles i comprova la teva punteria.",
    participants: "10-12",
    edats: "4-8 anys",
    edatmin: 4,
    edatmax: 8,
    participantsmin: 10,
    participantsmax: 20,
    espai: "Exterior",
    durada: "20-30 mins",
    objectius: (
      <div>
        <ul>
          <li>· Cooperar amb els integrants del grup.</li>
          <li>· Tractar a tothom per igual.</li>
          <li>· Respectar el treball dels altres membres de l’equip.</li>
        </ul>
      </div>
    ),

    material:
      "10 ampolles iguals, 1 ampolla diferent, guix, 1 objecte per llançar per persona(p.e:sola de sabata)",
    introducció: `Fa molt temps els víkings van inventar un joc anomenat Kubb que consistia a posar fustes dretes i tirar-les amb pedres. Com que eren navegants, aquest joc es va estendre sobretot cap a Suècia, on el van modernitzar, i finalment a la resta del món. No creguis que és fàcil... Comprova-ho tu mateix. T’atreveixes a jugar-hi?`,
    desenvolupament: (
      <div>
        <ul>
          <li>· Es formen dos equips amb un nombre de persones equitatiu.</li>
          <li>
            · Es reparteix a cada equip un nombre d’objectes destinats al
            llançament igual al de persones que té l’equip més nombrós. En cas
            que un equip tingui una persona menys, tindrem una tirada més.
          </li>
          <li>
            · Es col·loquen cinc ampolles en les línies corresponents de cada
            equip a una distància proporcional entre elles. També es posa
            l’ampolla diferent en el centre del camp, sobre la línia del mig.
          </li>
          <li>· El membres de cada equip es situen al final del seu camp.</li>
          <li>
            · Comencem a jugar per torns. L’equip núm. 1 ha de tirar les
            ampolles de l’equip núm. 2 sense tombar la del mig. Si es tomba
            alguna ampolla, l’equip núm. 2 haurà de tirar-la al camp de l’equip
            núm. 1. L’ampolla no pot sortir fora del camp. Si surt, hi haurà un
            altre intent. Si també falla aquest segon intent, l’equip núm. 2
            col·locarà l’ampolla on vulgui.{" "}
          </li>
          <li>
            S’han de tirar abans totes les ampolles que no estaven en la seva
            posició inicial.
          </li>
          <li>
            Un cop tombades totes les ampolles del camp, s’ha de fer el mateix
            amb la del centre.
          </li>
          <li>
            Si algú la tira, aquest jugador perd el seu objectiu per llançar,
            però no està eliminat.
          </li>
          <li>L’objectiu és tombar l’ampolla central.</li>
        </ul>
      </div>
    ),

    avaluació:
      "Opinar sobre l’ajuda, companyonia i confiança del grup. No hem d’oblidar que cal tenir una bona punteria i una bona coordinació dins l’equip.",
    etiquetes: ["Competitiu", "Esportiu", "Exterior"],
    isFavorite: false,
  },
  {
    id: 6,
    title: "Juguem la carta de la inclusió",
    descripció: "Joc de cartes per a treballar contra l'exclusió social",
    participants: "5-8",
    edats: "12-18 anys ",
    edatmin: 12,
    edatmax: 18,
    participantsmin: 5,
    participantsmax: 10,
    espai: "Interior/Exterior",
    durada: "30-45 mins",
    objectius: (
      <div>
        <ul>
          <li>· Treballar l'empatia</li>
        </ul>
      </div>
    ),

    material: "Baralla de cartes espanyola, 2-3 cigrons per participant",
    introducció: `Originalment, aquest joc es diu “el Porc”, però està adaptat perquè es pugui jugar amb qualsevol joc de cartes que tothom conegui. La gràcia i la manera de treballar l'objectiu pedagògic està en la dinàmica dels eliminats.`,

    desenvolupament: (
      <div>
        <ul>
          <li>
            · A l'inici, cada participant té tres cigrons davant seu, visibles
            per a la resta de jugadors. Aquests cigrons representen les vides.
            El joc s'acaba quan només li queden cigrons a un jugador (el
            guanyador). Per arribar a aquesta situació es faran tantes rondes
            com calgui.
          </li>
          <li>
            · A cada ronda es pot jugar a un joc de cartes senzill i ràpid (per
            exemple, el Set i Mig); qui perd es descarta d'una vida.
          </li>
          <li>
            · I ara ve la variant divertida del joc: quan un jugador perd totes
            les vides, deixa d'existir. La resta de jugadors no pot parlar amb
            ell, ni mirar-lo ni fer res que delati la seva existència. Si algun
            jugador ho fa, li ha de donar una de les seves vides (encara que
            sigui la darrera) perquè el jugador existeixi i pugui seguir jugant.
            Mentre un jugador no té vides pot fer o dir el que sigui perquè la
            resta li faci cas, però no pot tocar les cartes ni a cap jugador.
          </li>
        </ul>
      </div>
    ),
    avaluació:
      "Aquest pot ser un joc molt adequat per treballar temes com el bullying, la marginació o l'exclusió social. Com s'han sentit mentre jugaven? Com s'ha sentit el primer a perdre totes les vides? I quan ja era només un? Fem sentir així els altres, els amics o companys de l'esplai...?",
    etiquetes: ["Competitiu", "Interior", "Exterior"],
    isFavorite: false,
  },
  {
    id: 7,
    title: `"Tocata"`,
    descripció:
      "Adaptació preesportiva del rugby on es poden introduir els aspectes bàsics del joc en un entorn segur i limitant el contacte físic.",
    participants: "Tants com vulguin(mín 5 per equip)",
    edats: "12-18 anys",
    edatmin: 12,
    edatmax: 18,
    participantsmin: 10,
    participantsmax: 50,
    espai: "Exterior",
    durada: "30 mins - 2h (depén edat)",
    objectius: (
      <div>
        <ul>
          <li>
            · Aprendre els aspectes bàsics del rugby (tàctica, tècnica i
            reglament).
          </li>
          <li>
            · Desenvolupar les habilitats motrius específiques de l’esport.
          </li>
          <li>
            · Aplicar els valors de cooperació, competició i respecte propis de
            l’esport.
          </li>
        </ul>
      </div>
    ),

    material: "Pilota, petos",
    introducció: `Consisteix en una adaptació del rugby que ens permet treballar les tècniques bàsiques i valors d’aquest esport sense necessitat d’un material o terreny de joc específics. A més, ens permet fer-ho sense que els atributs físics dels participants siguin determinants en la seva pràctica, ja que limitem el contacte propi del rugby.`,

    desenvolupament: (
      <div>
        <ul>
          <li>
            · Dos equips amb el mateix nombre de participants es col·loquen a
            les línies de fons d’un camp rectangular. Un equip amb “peto”
            començarà el joc realitzant un xut d’allunyament que l’equip
            contrari haurà de rebre i iniciar l’atac. Aquest atac consistirà a
            arribar a la línia d’anotació, des d’on l’equip rival ha realitzat
            el xut, i plantar la pilota al terra. Això suposarà un punt per a
            l’equip.
          </li>
          <li>
            · Els jugadors de l’equip defensor han de “placar” el jugador
            atacant que porta la pilota tocant-lo amb les dues mans. Aquest
            haurà d’aturar-se i realitzar una passada enrere a un company
            desmarcat. Poden provar de tallar una passada per recuperar la
            pilota.
          </li>
          <li>
            · L’equip que ataca ha de córrer buscant l’espai menys defensat i
            procurar mantenir-se sempre darrere del jugador que porta la pilota
            per donar-li opcions de passada.
          </li>
          <li>
            · Si la pilota surt fora de l’espai de joc, l’equip rival traurà
            fent una passada enrere. Guanya l’equip que hagi fet més punts al
            final del temps de joc estipulat.
          </li>
        </ul>
      </div>
    ),
    avaluació:
      "Mitjançant aquesta activitat els nens podran gaudir i aprendre descobrint un esport poc conegut al nostre país. ",
    etiquetes: ["Competitiu", "Exterior"],
    isFavorite: false,
  },
  {
    id: 8,
    title: "Treure la xapa o apostar xapes",
    descripció: "Joc per aprofitar material de rebuig i treballar la punteria.",
    participants: "Tants com vulguin",
    edats: "4-15 anys",
    espai: "Exterior",
    edatmin: 4,
    edatmax: 15,
    participantsmin: 5,
    participantsmax: 20,
    durada: "15 mins",
    objectiusMoni: (
      <div>
        <ul>
          <li>· Aprofitar materials que tenim en el nostre dia a dia.</li>
          <li>
            · Transmetre jocs tradicionals perquè no es perdin amb el pas del
            temps.
          </li>
        </ul>
      </div>
    ),
    objectiusInf: (
      <div>
        <ul>
          <li>· Esperar el torn de manera distesa i sense posar-se nerviós.</li>
          <li>· Desenvolupar la coordinació física i visual.</li>
          <li>
            · Conèixer jocs de sempre que podem fer a la plaça i amb poc
            material.
          </li>
          <li>· Valorar els recursos que tenim a l’abast.</li>
        </ul>
      </div>
    ),

    material:
      "Un guix, 5 xapes per jugador, un taló de sabata o un tros de fusta d'uns 4-5 cm de diàmetre",
    introducció: `Aquest és un joc tradicional de carrer en què amb poc material – o bé material que ja no té la funció originària – els infants treballen la paciència i la punteria.`,

    desenvolupament: `Primer marcarem el camp per a poder jugar amb un guix: dibuixarem un cercle d’un metre de diàmetre i a uns dos metres d’aquest marcarem la línia de llançament. 

        Per saber qui serà el primer llançador es posaran tots els jugadors al cercle i tiraran una xapa a la línia de llançament; el que s’hi apropi més sense passar-se serà el primer, el segon serà el qui hagi quedat el segon més a prop i així consecutivament. 
        
        Un cop ja sabem quin és l’ordre comencem a jugar. Tots els jugadors aposten o posen de tres a 5 xapes dins del cercle. El primer jugador llença el tac de fusta o el taló de sabata des de la línia de llançament fins al cercle intentant fer fora d’aquest tantes xapes com li sigui possible. Si aconsegueix treure una xapa del cercle torna a tirar. Si no aconsegueix treure cap xapa passa el torn al següent. 
        
        La partida s’acaba quan ja no queden xapes dins del cercle. Guanya la partida el jugador que aconsegueix més xapes de les que estaven apostades dins del cercle.`,
    avaluació: `Durant el joc podem observar com els infants s’ordenen i organitzen els torns i el joc en general. 

        Al final del joc podem preguntar als infants si coneixien el joc i si coneixen jocs de quan els seus avis eren petits i jugaven al carrer. 
        
        En qualsevol moment del joc podem fer una anàlisi per a valorar el possible ús del material que llencem i com podem aprofitar materials de rebuig per jugar sense haver de comprar res, aprofitant els recursos del nostre dia a dia.`,
    etiquetes: ["Competitiu", "Exterior"],
    isFavorite: false,
  },
  {
    id: 9,
    title: "El fantasma coix",
    descripció:
      "Els infants caminen en rotllana al voltant d'una taula, sota de la qual un d'ells serà el fantasma coix que busca uns peus nous.",
    participants: "5-15",
    edats: "4-11 anys",
    edatmin: 4,
    edatmax: 11,
    participantsmin: 5,
    participantsmax: 15,
    espai: "Interior",
    durada: "30 mins",
    objectiusMoni: (
      <div>
        <ul>
          <li>· Treballar la coneixença dels noms i la cohesió de grup.</li>
        </ul>
      </div>
    ),
    objectiusInf: (
      <div>
        <ul>
          <li>· Experimentar la por a la foscor de manera lúdica i segura.</li>
        </ul>
      </div>
    ),

    material: "Taula, preferiblement rodona",
    introducció: `És important ambientar bé la dinàmica abans de començar, adaptant la intensitat al grup d'edat. Fem entrar el grup d'infants en una sala a les fosques, i els situem al voltant d'una taula circular. Els expliquem que hem arribat a una casa encantada on viu un fantasma molt especial, el fantasma coix, que sempre busca uns peus nous per poder caminar. Aquest fantasma viu sota de la taula i ara tot el grup hem de caminar al seu voltant. Un dels participants començarà fent de fantasma.`,

    desenvolupament: `Diem el nom del primer fantasma i la resta comença a caminar en la mateixa direcció i en absolut silenci. L'objectiu del fantasma és agafar els peus d'algú i intentar endevinar-ne el nom. Quan hagi agafat uns peus ha de dir el nom d'aquella persona; en cas de no encertar-lo, continuarà fent de fantasma i ho provarà amb algú altre; si l'encerta, la persona que ha dit passarà a ser el fantasma coix i continuarem jugant. El joc acaba quan els monitors ho decideixin, o quan tothom hagi fet una vegada de fantasma.`,
    avaluació:
      "En acabar es fa una reflexió amb el grup sobre com s'han sentit i quines emocions han experimentat.",
    etiquetes: ["Competitiu", "Interior", "Jocs curts"],
    isFavorite: false,
  },
  {
    id: 10,
    title: "El tamborí",
    descripció:
      "Esport tradicional d'Itàlia que adopta el nom de l'implement amb què es juga: el tamborí.",
    participants: "Tants com vulguin",
    edatmin: 9,
    edatmax: 18,
    participantsmin: 10,
    participantsmax: 30,
    edats: "9-18 anys",
    espai: "Pista poliesportiva 35x16",
    durada: "45 mins",
    objectius: (
      <div>
        <ul>
          <li>
            · Utilitzar les habilitats i les destreses bàsiques corresponents a
            l'acció motriu fent servir l'observació, l'anàlisi i la imaginació
            en la resolució de problemes motrius.
          </li>
          <li>
            · Conèixer, identificar i utilitzar les habilitats i les destreses
            específiques fonamentals.
          </li>
          <li>
            · Controlar la pròpia lateralitat i exercitar-la referida a les
            altres persones i als objectes.
          </li>
          <li>
            · Interpretar les nocions de relació que s'estableixen entre el
            propi cos, els objectes i l'espai.
          </li>
          <li>· Respectar les regles i aplicar normes de joc.</li>
        </ul>
      </div>
    ),
    material: "Tamborins, pilotes de baixa pressió",
    introducció: `Es tracta d'un esport d'oposició, però sense contacte, entre dos equips formats per tres jugadors de pista. L'objectiu és copejar una pilota amb un tamborí, superar la línia central i fer-la botar en el terreny de joc de l'equip contrari després de superar la línia que marca el centre, sense que l'equip contrari pugui tornar el cop. No existeix l'intercanvi de tocs entre els jugadors del mateix equip.

        Es juga sense xarxa central i hi ha una línia de servei per a cada equip que està situada a 2 metres de la línia central i que només s'ha de sobrepassar en el moment d'efectuar el servei; una vegada s'ha realitzat amb èxit, la zona que queda delimitada des d'aquesta línia i la línia central formen part del terreny de joc fins a l'acabament del punt.`,

    desenvolupament: `Feta la introducció de com es juga, el monitor plantejarà el següent joc per tal de familiaritzar els infants amb el Tamborí: el joc es diu "El pispa". La situació inicial és que tots circulen lliurement per la pista amb un tamborí i una pilota cada un, fent tocs i desplaçant-se lliurement per l'espai.
        Quatre jugadors sense tamborí esperen fora i van entrant d'un en un. Al senyal del monitor, aquests intenten agafar la pilota d'algú procurant superar-ne l'oposició. Quan un pispa aconsegueix una pilota d'algú, es queda amb el tamborí i la pilota d'aquest, i s'intercanvien els papers.
        En un moment donat, el/la monitor/a fa un senyal i, a partir d'aquell moment, els quatre que no tenen tamborí segueixen intentant agafar les pilotes dels altres, però amb la diferència que qui la perdi s'asseurà a terra esperant la fi del joc. L'últim jugador que quedi dret amb la seva pilota serà el guanyador.`,
    avaluació:
      "En aquest joc, sempre n'hi ha un que guanya, però es pot modificar la darrera norma fent que no hi hagi cap eliminat. S'atura quan ho decideix el monitor i es fa una reflexió final conjunta en la qual tots poden opinar sobre com ha anat el desenvolupament del joc i amb quins problemes/dificultats s'han trobat. Per a més informació, podeu visitar www.tamcat.org",
    etiquetes: ["Competitiu", "Esportiu", "Exterior", "Interior"],
    isFavorite: false,
  },
  {
    id: 11,
    title: "El gos ensuma",
    descripció:
      "Joc per realitzar els dies de pluja, dins de l’aula o al gimnàs. S’amagarà un objecte a la sala i hauran de trobar-lo.",
    participants: "Tants com vulguin",
    edats: "4-8 anys",
    edatmin: 4,
    edatmax: 8,
    participantsmin: 5,
    participantsmax: 20,
    espai: "Interior",
    durada: "Máxim 5mins",
    objectius: (
      <div>
        <ul>
          <li>· Desenvolupar la capacitat d’observació.</li>
          <li>
            · Utilitzar el caminar de quatre potes com a manera de desplaçament.
          </li>
          <li>
            · Identificar, a partir de les pistes de l’educador, de quin objecte
            s’està parlant.
          </li>
        </ul>
      </div>
    ),
    material: "Objecte per a amagar",
    introducció: `Per introduir l’activitat explicarem als infants si saben com busquen les coses els gossos. Llavors explicarem que ho fan mitjançant l’olfacte, farem la comparació que nosaltres ara serem gossos i que haurem de buscar un objecte que està amagat. Els explicarem que s’hauran de desplaçar per la sala de quatre potes, com si fossin un gos, i que hauran de trobar un objecte que el monitor/a haurà amagat prèviament.`,

    desenvolupament: `Farem sortir els infants de la sala i amagarem l’objecte. Hi entraran tots i, de quatre potes, hauran d’anar buscant l’objecte. Quan el trobin no el poden agafar. Han d’anar a buscar el monitor/a i dir-li on han vist que està amagat. Si han encertat, seuran en un lloc de la sala que aquest els indiqui. Passats cinc minuts, als infants que no hagin trobat l’objecte els farem una marca al front amb pintura de cara. Amb els més petits l’objecte a amagar s’ensenyarà abans, però amb els altres es pot jugar primer a donar pistes sobre quin és l’objecte a buscar.`,
    avaluació:
      "Quan finalitzi l’activitat, seurem tots i demanarem què els ha semblat. Podem fer que la puntuïn en un tauler amb gomets: el verd voldrà dir que ha agradat i el vermell que no ha agradat.",
    etiquetes: ["Competitiu", "Interior"],
    isFavorite: false,
  },
  {
    id: 12,
    title: "Et desafio",
    descripció:
      "Joc per realitzar quan la temàtica siguin els cavallers. A l’aire lliure amb espai per córrer i amagar-se. Ideal un bosc.",
    participants: "Tants com vulguin",
    edats: "9-15 anys",
    edatmin: 9,
    edatmax: 15,
    participantsmin: 5,
    participantsmax: 20,
    espai: "Exterior",
    durada: "Máxim 30mins",
    objectius: (
      <div>
        <ul>
          <li>· Establir estratègies en equip.</li>
          <li>· Desenvolupar l’agilitat física i mental.</li>
          <li>· Prendre consciència de les pròpies capacitats físiques.</li>
        </ul>
      </div>
    ),
    material:
      "Una bandera per equip, guix, mocador llarg(un color per cada equip), pinça de roba per cada participant",
    introducció: `Per introduir l’activitat explicarem que estem a l’època medieval i que els cavallers en aquella època es desafiaven uns als altres. Hi haurà dos equips, cadascú amb un castell, marcat amb una bandera (que haurà fet cada equip) Han d’intentar arribar al castell de l’altre equip i treure la bandera. Pel camí si es troben als cavallers contraris es poden desafiar amb guix, pinça o mocador. Es diferencien els equips pel color dels mocadors.`,
    desenvolupament: `Cada equip ha de protegir la seva bandera i crear estratègies per poder aconseguir la de l’altre equip. Quan es troben dos cavallers de diferents equips s’han de desafiar. Qui primer digui a l’altre “et desafio”, és qui podrà escollir amb quin material es farà el desafiament: guix, pinça o mocador. Els desafiaments consisteixen en: amb el guix intentar pintar la sabata a l’altre cavaller, pinça intentar enganxar-li a la roba, mocador l’han de portar enganxat a la part del darrera dels pantalons i han d’intentar treure-li al seu contrincant. Qui guanya el desafiament es queda amb l’eina que han fet servir pel mateix. Només podem fer un desafiament a la vegada i després haurem de continuar el nostre camí.`,
    avaluació:
      "Al finalitzar l’activitat seurem tots i demanarem que els hi ha semblat l’activitat. Per equips hauran d’arribar a un consens i posar una nota del 1 al 10 i justificar per quin motiu li han posat aquesta nota.",
    etiquetes: ["Competitiu", "Exterior"],
    isFavorite: false,
  },
  {
    id: 13,
    title: "Kin-Ball",
    descripció: "Introducció a un esport poc conegut al nostre país",
    participants: "3 equips de 4",
    edats: "12-18 anys",
    edatmin: 12,
    edatmax: 18,
    participantsmin: 12,
    participantsmax: 24,
    espai: "Exterior",
    durada: "30mins-1h",
    objectius: (
      <div>
        <ul>
          <li>
            · Apendre els aspectes bàsics del kin ball (tàctica, tècnica i
            reglament)
          </li>
          <li>
            · Desenvolupar les habilitats motrius especifiques de l’esport
          </li>
          <li>
            · Aplicar els valors de cooperació, competició i respecte propis de
            l’esport
          </li>
        </ul>
      </div>
    ),
    material:
      "Una pilota gegant de 1,20 m. de diàmetre amb un pes d'1 kg. Tres jocs de quatre petos (rosa, negre, gris).",
    introducció: `El KIN-BALL fou inventat per Mario Demers llicenciat en Educació Física l’any 1986, amb l’objectiu de promoure la salut, la cooperació, el treball en equip i l’esportivitat. Esta disenyat per que tothom tingui l’oportunitat de jugar i el seu sistema asegura que tots el equips obtinguin punts.`,
    desenvolupament: `L'equip en possessió de la pilota (NEGRE) han de dir Kin Ball i el color de l'equip que s'ha interceptar (ROSA O GRIS).
        - Quan sentis el teu color, el teu equip ha d'agafar la pilota abans que toqui el sòl.
        - Si agafeu la pilota és el vostre torn de servir.
        - Si no l'agafeu, els altres dos equips anoten un punt cadascun i el teu equip posa de nou la pilota en joc.
        - Els jugadors que defensen han de formar un quadrat al voltant de la pilota mantenint una distància de 3-4 metres.
        Aquest quadrat segueix els moviments de la pilota i cada jugador és responsable d’una cantonada del quadrat.
        Principals regles
        La recepció: Es pot jugar la pilota amb totes les parts del cos. A partir del momento en què hi ha tres 3 jugadors del mateix equip en contacte amb la pilota, no poden desplaçar-se. No obstant això, els jugadors en contacte amb la pilota poden pivotar sobre un peu.
        La passada: Es pot passar la pilota a una altra persona per aconseguir guanyar terreny ràpidament.
        Normalment, el jugador que ha fet la passada al seu equip serà el que faci el servei. Només es permeten 2 passes per jugada.
        Puntuació: Sempre que un equip cometi una falta els altres dos equips aconsegueixen un punt cadascun.
        Obstrucció: Quan un jugador bloqueja de manera intencionada a un adversari sense que hagi nomenat el seu equip s'anoten un punt els altres dos equips. En cas d’obstrucció involuntària es reprèn el joc per part de l'equip que va llançar`,
    avaluació:
      "Mitjançant aquesta activitat els nens podran gaudir i apendre descobrint un esport poc conegut al nostre pais.",
    etiquetes: ["Competitiu", "Cooperatiu", "Esportiu", "Exterior"],
    isFavorite: false,
  },
  {
    id: 14,
    title: "Mocador i Mataconills = Mocaconills",
    descripció:
      "Situació inical igual que al joc del mocador però amb dues pilotes al mig del camp. Els jugadors que surten han de puntuar llençant-se la pilota l'un a l'altre.",
    participants: "Dos grups iguals.",
    edats: "4-18 anys",
    edatmin: 4,
    edatmax: 18,
    participantsmin: 6,
    participantsmax: 20,
    espai: "Exterior",
    durada: "20mins",
    objectius: (
      <div>
        <ul>
          <li>
            · Conèixer la possibilitat de crear jocs a partir d'altres jocs.
          </li>
          <li>· Desenvolupar habilitats motrius bàsiques. Llançaments.</li>
          <li>· Gaudir d'una activitat lúdica i motriu.</li>
        </ul>
      </div>
    ),
    material: "Dues pilotes de plàstic tou o escuma.",
    introducció: `A partir de jocs molt coneguts pels nostres infants podem elaborar altres jocs o activitats lúdiques triant les característiques que més ens interessi treballar. El cas dels Mocaconills agafa elements del joc del Mocador i del Mataconills per fer un joc nou i igual de divertit que els altres dos.

        En una situació inicial, es divideix el grup en dos equips amb el mateix nombre de jugadors a banda i banda. Cada equip es situa a uns deu metre de la línia central, on està el dinamitzador del joc i dues pilotes d'escuma (una per cada equip) separades uns tres metres l'una de l'altra.
        
        Un cop cada jugador s'ha numerat comença el joc.`,
    desenvolupament: `El dinamitzador dirà un número en veu alta. Els dos jugadors que tinguin aquell número hauran de sortir ràpidament a agafar una de les dues pilotes. Quan la tenen, han de ser ràpids i fer un llançament contra el jugador de l'equip contrari abans que ell ens pugui tocar amb la seva. En cas de tocar-lo, haurà guanyat un punt pel seu equip i es tornarà a començar.

        Cada jugador només disposa d'un llençament, així que, si falla, haurà d'esquivar el llançament del jugador contrari sense possibilitat de fer un segon intent.
        
        Per puntuar hem de tocar amb la pilota el jugador contrari o agafar a l'aire la pilota que ell ens tiri. Podem córrer amb la pilota a les mans i hi ha un temps límit d'uns 20 segons per fer els llançaments.
        
        Com a variant, es pot dir més d'un número alhora. En aquest cas, els del mateix equip s'hauran d'ajudar per tocar amb la pilota a algun dels de l'altre equip abans de ser tocats.`,
    avaluació:
      "Comentarem el desenvolupament del joc i quina ha estat la reacció de l'equip guanyador i també la del perdedor en cas de que n'hi hagin. ",
    etiquetes: ["Competitiu", "Exterior"],
    isFavorite: false,
  },
  {
    id: 15,
    title: "L'assasí de whatsapp",
    descripció:
      "Adaptació del joc de rol conegut com “el llop” o “l’assassí del poble”. Amb el suport de l’aplicació WhatsApp o Telegram.",
    participants: "5-25",
    edats: "12-18 anys",
    edatmin: 12,
    edatmax: 18,
    participantsmin: 5,
    participantsmax: 25,
    espai: "Interior/Exterior",
    durada: "Depén de la partida",
    objectius: (
      <div>
        <ul>
          <li>· Conèixer altres possibilitats per a whatsapp o telegram.</li>
          <li>
            · Veure els problemes de comunicació que es donen amb aquestes
            aplicacions.
          </li>
          <li>
            · Fer un bon ús de les aplicacions de comunicació i missatgeria.
          </li>
        </ul>
      </div>
    ),
    material: "Un smartphone per participant amb l’aplicació WhatsApp.",
    introducció: `Les TIC, els smartphones i les seves aplicacions han dotat la societat d’una possibilitat de comunicació en temps real molt avançada. Tanmateix, aquestes millores venen acompanyades de problemes, malentesos i confusions en la comunicació.`,
    desenvolupament: `Hi ha moltes versions del joc del llop. Per aquesta proposta es jugarà a la versió més simple on hi ha un administrador de la partida, un assassí i el poble.
        L’administrador crearà un grup de conversa amb tots els participants, a part enviarà un missatge privat a tots, comunicant-los el seu rol de poble o assassí. Posteriorment, donarà l’avís d’inici de la partida: “És de nit i el poble marxa a dormir”. En aquest punt tots els participants han d’escriure un missatge privat a l’administrador saludant-lo amb un “hola”, menys l’assassí qui li escriurà el nom de la seva víctima. Tot seguit l’administrador torna a adreçar-se al grup dient “El poble desperta, però aquesta nit un assassí ha matat a...” i diu el nom de la persona que ha mort. A partir d’aquí es succeeix la partida on el poble ha d’intentar esbrinar qui és l’assassí, posant-se d’acord entre tots per dir només un nom del possible assassí, i aquest ha d’intentar matar sense que el delatin.`,
    avaluació:
      "Aquesta activitat no només inclou la part lúdica del propi joc sinó que proposa una anàlisi posterior amb els participants, on tractar els diferents factors que s’hagin succeït durant la partida relatius als problemes de comunicació per l’ús de WhatsApp o Telegram.",
    etiquetes: ["Competitiu", "Interior", "Exterior"],
    isFavorite: false,
  },
  {
    id: 16,
    title: "Joc dels senglars",
    descripció:
      "Aprendrem com la disponibilitat de recursos influeix en el nombre d’animals d’una població.",
    participants: "15-30",
    edats: "9-15 anys",
    edatmin: 9,
    edatmax: 15,
    participantsmin: 15,
    participantsmax: 30,
    espai: "Exterior",
    durada: "15-20mins",
    objectius: (
      <div>
        <ul>
          <li>
            · Relacionar la disponibilitat de recursos amb la mida d’una
            població d’animals.
          </li>
          <li>
            · Experimentar els conceptes de superpoblació i perill d’extinció.
          </li>
          <li>
            · Analitzar els efectes sobre el medi que tenen els incendis i
            altres fenòmens.
          </li>
          <li>· Treballar la velocitat de reacció.</li>
          <li>· Treballar la coordinació i l’agilitat.</li>
        </ul>
      </div>
    ),
    material: "Sense material",
    introducció: `Aquest joc ens permetrà treballar conceptes d’ecologia i dinàmica de poblacions d’una manera divertida i entretinguda.`,
    desenvolupament: `Farem dos grups del mateix nombre de participants i els col•locarem en dues línies a banda i banda del camp de joc. Un grup seran senglars i l’altre seran recursos del medi, que simbolitzarem:
        - Aigua: fent el gest de beure amb el puny tancat i el polze cap a la boca.
        - Menjar: remenant la panxa com quan tenim gana.
        - Refugi: fent una teulada amb els braços al damunt del cap.
        Abans de cada torn es giraran cap enfora del camp de joc perquè els grups no es vegin entre ells. Tindran uns segons per pensar quin recurs volen (si són senglars) o quin volen ser (si són recursos). Quan el monitor ho digui, tots s’han de girar simbolitzant el recurs i els senglars han de córrer cap als recursos i agafar un que sigui el que ells demanaven. Els senglars que es quedin sense recurs, moriran i passaran a formar part del medi i per tant es quedaran a la línia dels recursos. Els senglars que aconsegueixin recursos es podran reproduir i per tant tornaran a la seva línia acompanyats pel recurs que han aconseguit, que es converteix en senglar.`,
    avaluació:
      "Veurem com la població de senglars varia en funció del nombre de recursos que hi ha. Podem simular situacions com un incendi (només hi hauria refugi) per observar com afecta a la dinàmica. Una pissarra Vileda ens pot anar molt bé per fer una gràfica amb el nombre de senglars per torns.",
    etiquetes: ["Competitiu", "Sense material", "Exterior"],
    isFavorite: false,
  },
  {
    id: 17,
    title: "La matrícula",
    descripció:
      "Joc competitiu per al qual hem d’intentar que no ens vegin la matrícula que portem enganxada al front.",
    participants: "Mín 8",
    edats: "9-18 anys",
    edatmin: 9,
    edatmax: 18,
    participantsmin: 8,
    participantsmax: 20,
    espai: "Exterior",
    durada: "10mins",
    objectius: (
      <div>
        <ul>
          <li>· Cooperar amb el grup.</li>
          <li>· Crear una estratègia d’equip.</li>
          <li>· Treballar la resistència i coordinació del cos.</li>
          <li>· Divertir-se a través del joc.</li>
          <li>· Respectar l’opinió dels companys.</li>
        </ul>
      </div>
    ),
    material: "Etiquetes adhesives, bolígraf, dos tresors(pilotes,banderes...",
    introducció: `Es dividiran els participants en dos grups i cadascun anirà a una zona diferent del camp, que serà la seva base. Prèviament, el monitor ha repartit les etiquetes i els bolígrafs, de manera que cada infant es farà la seva matrícula, que constarà d’una lletra i dos nombres (en el cas que els infants siguin petits es poden fer un dibuix). Un cop feta se l’enganxaran al front. Posteriorment, deixarà 2 minuts perquè cada equip amagui el seu tresor i pensi en l’estratègia que voldrà seguir.`,
    desenvolupament: `Cada equip ha d’intentar arribar a la base contrària i agafar el tresor de l’altre equip. Per arribar a la base contrària, cada infant ha d’intentar evitar que els jugadors de l’altre equip li diguin la seva matrícula (aquesta es pot amagar amb algun company, fer front amb front, amb diferents estratègies però sense possibilitat de poder amagar-la amb la mà). Si un company de l’altre grup diu la matricula d’un jugador, aquest ha de tornar a la seva base i tornar a iniciar el joc des d’allà. Un cop algú aconsegueix agafar el tresor contrari, ha de portar-lo a la seva pròpia base. En el cas que tornant a la base amb el tresor un company de l’equip contrari digui la matrícula del jugador, aquest l’ha d’entregar i es torna a amagar.`,
    avaluació:
      "Un cop finalitzat el joc es pot reunir el grup per posar en comú l’experiència.",
    etiquetes: ["Competitiu", "Coneixença", "Narració i expressió", "Exterior"],
    isFavorite: false,
  },
  {
    id: 18,
    title: "La campana",
    descripció:
      "Dos equips han d'intentar robar una campana i portar-la a la seva base sense fer soroll. En aquest joc guanya el més silenciós.",
    participants: "2-10",
    edatmin: 9,
    edatmax: 11,
    participantsmin: 2,
    participantsmax: 10,
    edats: "9-11 anys",
    espai: "Interior",
    durada: "20mins",
    objectiusMoni: (
      <div>
        <ul>
          <li>· Treballar la importància del silenci.</li>
        </ul>
      </div>
    ),
    objectiusInf: (
      <div>
        <ul>
          <li>· Practicar l'autocontrol i la paciència.</li>
          <li>· Potenciar l'equilibri motriu.</li>
        </ul>
      </div>
    ),
    material: "Dues campanetes(o picarols), una cadira",
    introducció: `Es divideix el grup en dos equips. Un monitor o monitora se situa al centre de la sala assegut i amb els ulls tapats damunt una cadira, sota de la qual tindrà dues campanetes. Cada equip situa la seva base en un dels extrems de la sala. El seu objectiu és robar una de les campanetes i portar-la a la seva base.`,
    desenvolupament:
      "El joc es desenvolupa per torns. En el primer torn surt un participant de cada equip, que s'han d'acostar en absolut silenci al monitor o monitora, agafar una de les campanetes i tornar-la a la seva base, també en silenci. Si el monitor sent dringar una de les campanetes, aixecarà el braç del cantó en el qual l'ha sentit i aquell equip perdrà el torn. A cada torn un equip només pot aconseguir un punt si ha aconseguit fer arribar en primer lloc la campaneta a la seva base sense fer-la dringar. El joc s'acaba quan un equip arriba a 5 punts. Si cada equip té més de 5 participants, es pot variar la puntuació final segons el nombre d'aquests.",
    avaluació:
      "Es valorarà l'ambient general de l'activitat i si els infants han respectat les normes del joc, tot incidint en la dificultat i la necessitat del silenci.",
    etiquetes: ["Competitiu", "Interior"],
    isFavorite: false,
  },
  {
    id: 19,
    title: "Caçafantasmes",
    descripció:
      "Joc alternatiu als jocs de por clàssics per treballar la foscor i passar una bona estona.",
    participants: "Mín 10",
    edatmin: 4,
    edatmax: 11,
    participantsmin: 10,
    participantsmax: 20,
    edats: "4-11 anys",
    espai: "Espai tancat gran/Exterior",
    durada: "1h 30mins",
    objectiusMoni: (
      <div>
        <ul>
          <li>· Ensenyar noves alternatives de jocs de por als infants.</li>
          <li>· Facilitar un clima positiu entre tot el grup.</li>
        </ul>
      </div>
    ),
    objectiusInf: (
      <div>
        <ul>
          <li>· Identificar la riquesa de la cohesió de grup.</li>
          <li>· Experimentar l'emoció de la foscor.</li>
          <li>· Respectar les normes del joc.</li>
        </ul>
      </div>
    ),
    material:
      "Fulls blancs(un per nen), 5 o 6 retoladors, llanternes, altaveu, la cançó 'Original GhostBusters Theme Song'",
    introducció: `Aquest joc suposa una alternativa a les clàssiques activitats de nit relacionades amb la foscor i la por (túnels del terror, històries de por...) que poden ser molt divertides, però polèmiques a nivell pedagògic. És un recurs molt útil per nits de colònies (adaptable a casals, esplais...) i per a nits de pluja on tinguéssim planificada una activitat exterior.`,
    desenvolupament: `Aquesta nit la nostra casa ha sigut envaïda per molts fantasmes menuts i entremaliats que s'han amagat per tot arreu. Aquests fantasmes són els propis participants que estaran amagats per l'espai de joc.

        A l'hora d'amagar-se, hauran de tenir en compte una sèrie de normes bàsiques per tal que el joc vagi bé i ningú prengui mal: un cop amagats, han d'estar quiets al lloc on s'amaguin; si s'han de desplaçar ho han de fer caminant; cal tenir cura de l'espai de joc i fins que s'amaguin han d'anar amb les llanternes enceses.
        
        Una vegada explicat el joc, repartim a cada participant un full en blanc que haurà de dur a la mà tota l'estona.
        
        Apaguem els llums de la casa i deixem dos minuts per a que s'amaguin on vulguin. Tot seguit, començarà la cançó i els monitors i les monitores aniran a "caçar" fantasmes amb un retolador a la mà. Els monitors tenen aproximadament quatre minuts (temps que dura la cançó) per trobar i guixar en el paper dels fantasmes que trobin: fantasma guixat, fantasma caçat!
        
        Una vegada la cançó acabi, tots els infants sortiran de l'amagatall i farem recompte per veure quants han sigut caçats.
        
        Podem fer tantes rondes com vulguem i si ho creiem adient alguns nens i nenes poden passar a ser els caçadors.`,
    avaluació: `Es tracta de veure quines impressions han tingut els monitors i les monitores sobre l'ambient que ha generat el joc, l'emoció de la foscor, la tensió de tenir un caçador que et busca, el silenci...

        A partir d'aquí podem reunir els nens i nenes al final de les diverses rondes i valorar amb ells totes aquestes impressions.
        
        És important no comparar aquesta activitat amb els nens i nenes amb un túnel del terror ni cap altre per tal de no desmuntar tot el misteri que ha tingut fins ara el joc.`,
    etiquetes: [
      "Competitiu",
      "Cooperatiu",
      "Exterior",
      "Grans jocs",
      "Interior",
      "Jocs de nit",
    ],
    isFavorite: false,
  },
  {
    id: 20,
    title: "Qui és qui",
    descripció:
      "Activitat basada en el divertit joc de taula 'Qui és qui?'', en què els infants i joves es convertiran en els personatges del joc.",
    participants: "20-40",
    edats: "12-15 anys",
    edatmin: 12,
    edatmax: 15,
    participantsmin: 20,
    participantsmax: 40,
    espai: "Interior/Exterior",
    durada: "1h 30mins",
    objectiusMoni: (
      <div>
        <ul>
          <li>· Fomentar la coneixença de grup.</li>
          <li>· Potenciar la creativitat dels infants i joves.</li>
        </ul>
      </div>
    ),
    objectiusInf: (
      <div>
        <ul>
          <li>· Conèixer el nom dels companys del grup.</li>
          <li>· Identificar als companys a través de la seva descripció.</li>
          <li>· Inventar personatges amb els recursos disponibles.</li>
        </ul>
      </div>
    ),
    material: "Disfresses i complements",
    introducció: `Es tracta d'un joc de coneixença en què els participants esdevindran personatges del conegut joc de taula "qui és qui?". Guanyaran els que sàpiguen camuflar-se millor i a la vegada identifiquin més ràpidament els companys de l'equip contrari.`,
    desenvolupament: `Dividim el grup en 2 subgrups del mateix nombre de persones. Tot seguit, els proporcionem disfresses i complements (barrets, jaquetes, ulleres, perruques, etc.) per tal que puguin crear un personatge. 

        Els participants seuen a terra excepte un voluntari de cada equip. Els dos grups se situen un davant de l'altre i es disposen en fileres de 4-5 infants. Segons l'edat dels participants i el grau de coneixença podem situar els dos grups esquena contra esquena per tal que sigui més difícil. 
        
        Cada equip decideix quin serà el seu personatge a endevinar comunicant el nom de l'infant als monitors. A continuació, el voluntari d'un dels equips fa una pregunta a l'altre equip, com per exemple "té ulleres?" o "porta jaqueta?". Si el personatge a endevinar compleix amb la pregunta, tots els participants d'aquell equip que no la compleixen s'inclinen endavant i quedant-se així la resta del torn. Si no la compleix, s'inclinen els que la compleixen. Els voluntaris dels dos equips s'alternen per fer preguntes fins que un dels dos endevina el nom del company que l'equip contrari havia dit als monitors.`,
    avaluació: `L'activitat funciona molt bé i es pot repetir vàries vegades canviant els voluntaris, les disfresses i barrejant els membres dels dos equips.`,
    etiquetes: [
      "Competitiu",
      "Coneixença",
      "Narració i expressió",
      "Interior",
      "Exterior",
    ],
    isFavorite: false,
  },
  {
    id: 21,
    title: "Joc de les trinxeres",
    descripció:
      "Joc curt i molt dinàmic que consisteix en capturar jugadors del grup contrari a partir d'una línia de joc o 'trinxera'.",
    participants: "Mín 10 per equip / 2 equips",
    edats: "12-15 anys",
    edatmin: 12,
    edatmax: 15,
    participantsmin: 20,
    participantsmax: 30,
    espai: "Interior/Exterior",
    durada: "Depén de la partida",
    objectiusMoni: (
      <div>
        <ul>
          <li>· Formar grups més cohesionats.</li>
          <li>· Disminuir individualismes negatius.</li>
          <li>
            · Fomentar la coordinació i cooperació per aconseguir un objectiu.
          </li>
          <li>· Aprendre a perdre.</li>
        </ul>
      </div>
    ),
    objectiusInf: (
      <div>
        <ul>
          <li>· Divertir-se.</li>
          <li>· Millorar la coordinació motora.</li>
          <li>· Desenvolupar estratègies de grup.</li>
        </ul>
      </div>
    ),
    material: "Guix",
    introducció: `Comencem amb la versió simple del joc seguint aquestes indicacions:

        1. Marcar o disposar d'una línia ben marcada de 5 metres o més.
        
        2. Formar dos grups "equilibrats".
        
        3. Disposar-los a banda i banda de la línia, sense creuar-la mai.
        
        4. Explicar les normes.
        
        5. Cada grup ha d'intentar agafar i estirar cap al seu costat els jugadors de l'equip contrari, tot procurant que al fer-ho no siguin agafats pels jugadors de l'altre equip.`,
    desenvolupament: `Els jugadors que hagin agafat la mà o el peu d'un adversari, l'estiraran cap al seu camp. I els jugadors d'aquell equip l'ajudaran agafant-lo per evitar-ho, a la vegada que intentaran agafar algun dels captadors i procuraran no ser agafats. Atenció. Cal aclarir pautes de joc abans de començar:

        1. No es pot agafar ni estirar la roba.
        
        2. Cal vigilar objectes personals: ulleres, polseres, collarets, anells punxants, etc.
        
        3. Es considera que un jugador ha perdut quan tot el seu cos ha travessat la línia i no pot tornar enrere.
        
        4. El jugador que perd, no torna a jugar fins que s'acaba la partida. Pot animar, confondre, despistar però no pot fer cap acció física.
        
        5. En tot moment, sigui quin sigui el nombre de jugadors s'ha de continuar el joc intentant capturar l'adversari.`,
    avaluació: `Quan els jugadors hagin fet la primera ronda, segur que voldran repetir per desenvolupar o millorar estratègies de captura. En un moment donat del joc -a criteri del monitor, per equilibrar forces, per donar més joc o per allargar el joc- pot introduir una variant. Es traça ràpidament una segona línia paral·lela a la principal a un metre de distància i es fa passar pel passadís format els jugadors que han perdut (primer els d'un equip i després els de l'altre). Han de fer- ho d'un en un evitant que els seus captadors els puguin tornar a capturar. Aquest cop el seu equip no els pot ajudar. Els jugadors que aconsegueixin passar sense ser capturats tornaran al seu equip. El joc recomençarà on s'havia quedat.`,
    etiquetes: ["Competitiu", "Exterior", "Jocs curts"],
    isFavorite: false,
  },
  {
    id: 22,
    title: "Tots no!",
    descripció: "Joc per treballar la velocitat i la reacció.",
    participants: "5+",
    edatmin: 4,
    edatmax: 18,
    participantsmin: 5,
    participantsmax: 10,
    edats: "4-18 anys",
    espai: "Interior/Exterior",
    durada: "7-10mins",
    objectiusMoni: (
      <div>
        <ul>
          <li>· Potenciar l'habilitat motriu de desplaçament. </li>
        </ul>
      </div>
    ),
    objectiusInf: (
      <div>
        <ul>
          <li>· Respectar els companys i les normes del joc.</li>
        </ul>
      </div>
    ),
    material: "cons, cerles o guix",
    introducció: `Primerament m'agradaria dir que el nom del joc no m'agrada imposar-lo, és a dir, prefereixo que siguin els propis infants els que bategin el joc, sempre i quan sigui un grup amb el que tenim una certa continuïtat. Dit això, per començar el joc els infants es distribuiran per l'espai, cadascun a dins del seu cercle excepte d'un (o dos o tres si tenim un grup nombrós) que es situarà al mig de tots ells sense cercle.`,
    desenvolupament: `A la nostra senyal els infants hauran de canviar ràpidament de cercle, d'aquesta manera el que no en tenia n'haurà d'ocupar el d'un altre, de manera que l'infant que es queda sense cercle anirà canviant constantment. També podem utilitzar la variant de jugar de la mateixa manera però per parelles (també pot ser mixta) i agafats de la mà, així treballarem la cooperació per poder arribar a l'objectiu.`,
    avaluació: `Finalitzarem l'activitat parlant amb els infants sobre si el joc ha anat com ells esperaven (així rebem feedback) i també com l'hem vist des de fora nosaltres, posant èmfasi en els objectius que ens havíem marcat inicialment. Si s'escau també serà el moment de posar nom a l'activitat.`,
    etiquetes: ["Competitiu", "Exterior", "Interior", "Jocs curts", "Esportiu"],
    isFavorite: false,
  },
  {
    id: 23,
    title: "Joc dels mariscals",
    descripció:
      "Joc dinàmic i ràpid, on l'objectiu és fer baixar de categoria als grups i pujar al seu lloc, tot dient una frase i fent o no certs moviments. Tot ha de ser sempre de forma molt coordinada i ràpida. Joc de sobretaula, dies de pluja, vora el foc, abans d'anar a dormir, etc.",
    participants: "Mín14(7/2), Máxim33(11/3), Ideal21(7/3)",
    edats: "12-18 anys",
    edatmin: 12,
    edatmax: 18,
    participantsmin: 14,
    participantsmax: 33,
    espai: "Interior/Exterior",
    durada: "40-100mins",
    objectiusMoni: (
      <div>
        <ul>
          <li>· Formar grups més cohesionats. </li>
          <li>· Disminuir individualismes negatius.</li>
          <li>· Integrar nousvinguts.</li>
          <li>
            · Fomentar la coordinació i cooperació per aconseguir un objectiu.
          </li>
          <li>· Incentivar la superació.</li>
          <li>· Aprendre a perdre.</li>
        </ul>
      </div>
    ),
    objectiusInf: (
      <div>
        <ul>
          <li>· Divertir-se.</li>
          <li>· Aprendre a superar obstacles.</li>
          <li>· Millorar coordinació motora i verbal.</li>
          <li>· Desenvolupar estratègies de grup per no perdre el joc.</li>
        </ul>
      </div>
    ),
    material:
      "Cadires per cada jugador, fulls de paper i marcador, cinta adhesiva",
    introducció: `Seguir les instruccions següents: 

        1. Formar grups. Seure. 
        
        2. Formar cercle, separant grups per 50 cm. Fer obertura del cercle d'un metre: "C" invertida. 
        
        3. Assignar/escriure categories als llocs que ocuparan els jugadors: 1r grup categoria màxima "Generals", últim grup "Soldats". Important: després de 5 jugades de prova cal retirar els noms de les categories. 
        
        4. Categories (7 grups x 2 jugadors): General – Coronel – Tinent –Sergent – Capità – Caporal – Soldat.`,
    desenvolupament: `A. Verbal:

        1. Es diu la frase que cada grup repetirà textual i simultàniament en veu alta i clara sense silencis ni variacions: "Nosaltres els (núm. 1) preguntem als (núm. 2) si hi ha cap novetat".
        
        2. Resposta: "Nosaltres els (núm. 2) responem als (núm. 1) que no hi ha cap novetat i els preguntem als (núm. 3) si hi ha cap novetat". 
        
        3. El núm. 1 correspon al grup que comença el joc i pot ser qualsevol. Núm. 2 correspon al grup que ha de respondre i núm. 3 al grup que s'elegeix per respondre de nou. 
        
        4. Llavors els núm. 3 respondran: "Nosaltres els (núm. 3) responem als (núm. 2) que no hi ha cap novetat i preguntem als (categoria que vulguin) si hi ha cap novetat". 
        
        5. Exemple de pregunta: Nosaltres els tinents preguntem als sergents si hi ha cap novetat. Exemple de resposta: Nosaltres els sergents responem als tinents que no hi ha cap novetat i preguntem als generals si hi ha cap novetat.
        
         
        
        B. Motriu:
        
        1. Les frases s'acompanyen de dos moviments: salutació militar (vènia) i aixecar-se de la cadira. Seran simultànies i es faran només per dirigir-se a una categoria superior. 
        
        2. El grup que respongui actuarà en conseqüència, aixecant-se i saludant o no fent res segons la categoria de qui els interrogui. 
        
        3. Sincronització: els participants de cada grup han d'estar agafats pels colzes (fer-se bracet) en tot moment i aixecar-se o no junts sempre que calgui. 
        
        4. Pèrdua de les categories i dinàmica del joc: l'equip que no fa la vènia quan toca, respon descoordinat o s'equivoca en alguna paraula o moviment perd la seva categoria i baixa a l'últim lloc (soldats). D'aquesta manera, les categories pugen un lloc cap amunt cobrint la categoria que queda vacant. 
        
        5. Dinamització del joc: tots els grups aspiren a ocupar el càrrec màxim, per tant intenten fer-los fora. Si els alts càrrecs es consoliden i costa molt de fer-los fora el monitor pot fer dues coses: 
        
        a. Desfer tots els grups i formar-los fent pujar o baixar un membre de cada grup tres categories. 
        
        b. Fer baixar els grups sencers tres categories.`,
    avaluació: `Podem plantejar-ho com que no hi ha guanyador o bé que guanyi qui ocupa la màxima categoria durant més temps durant un temps establert. Si tenim més jugadors podem afegir més categories o bé mantenir les set categories però ampliar el nombre de participants de cada grup a 3 membres per cada categoria.`,
    etiquetes: [
      "Competitiu",
      "Exterior",
      "Interior",
      "Narració i expressió",
      "Cooperatiu",
    ],
    isFavorite: false,
  },
  {
    id: 24,
    title: "El follower",
    descripció:
      "En un món en què les xarxes socials són sempre a la primera línia de l’ordre del dia, som capaços de generar l’equip més grans de seguidors?",
    participants: "Com més millor",
    edats: "4-18 anys",
    edatmin: 4,
    edatmax: 18,
    participantsmin: 5,
    participantsmax: 50,
    espai: "Interior/Exterior",
    durada: "10mins",
    objectiusMoni: (
      <div>
        <ul>
          <li>· Conèixer els rols que juga cadascun dels infants/joves. </li>
          <li>
            · Generar un espai de reflexió al voltant de les xarxes socials i
            les influències.
          </li>
        </ul>
      </div>
    ),
    objectiusInf: (
      <div>
        <ul>
          <li>· Descobrir el radi d’influència d’una sola acció.</li>
          <li>· Prendre consciència de l’individualisme del nostre entorn.</li>
        </ul>
      </div>
    ),
    material: "Sense material",
    introducció: `Sabem que les xarxes socials són molt importants i influents en la imatge que el nostre entorn té sobre nosaltres. Així doncs, per què no portar aquesta competició per tenir molts seguidors a la vida real?`,
    desenvolupament: `Per jugar al follower s’ha de tenir molt clar que és una competició individual: res d’equips, res d’aliances; l’objectiu és ser la persona amb més influència sobre la massa social. Així doncs, passegem per l’espai i quan trobem una altra persona l’aturem i la reptem a pedra, paper o tisora. La persona que perd passa, automàticament, a ser seguidora de l’altra i l’ha de seguir i animar-la a tot arreu on vagi. 

        La persona guanyadora, que ja té un follower, ha de seguir caminant per l’espai per anar guanyant cada cop més seguidors competint al joc de pedra, paper o tisora. En cas que perdi, ella i tot el seu grup de seguidors passaran a ser els seguidors de la persona guanyadora. 
        
        El joc dura fins que un sol participant ha aconseguit que tota la resta el segueixi.`,
    avaluació: `Malgrat el dinamisme i l’espectacularitat del joc, tant fer una breu reflexió sobre les sensacions i els rols que s’han pres, així com extrapolar-ho al món de les xarxes socials. Algunes preguntes podrien ser si s’ha animat a totes les persones per igual, si hi ha hagut nois i noies a qui feia més “mandra” animar, què animava a tenir encara més seguidors cada cop, les sensacions i sentiments de tenir tanta gent al teu darrere, etc.`,
    etiquetes: [
      "Competitiu",
      "Exterior",
      "Interior",
      "Coneixença",
      "Sense material",
    ],
    isFavorite: false,
  },
  {
    id: 25,
    title: "Guardians de pedres",
    descripció:
      "Joc per fer en un espai exterior en què es treballa l'agilitat i els reflexes",
    participants: "8-20(nombre parell)",
    edats: "4-11 anys",
    edatmin: 4,
    edatmax: 11,
    participantsmin: 8,
    participantsmax: 20,
    espai: "Exterior",
    durada: "20mins",
    objectiusMoni: (
      <div>
        <ul>
          <li>· Potenciar el treball en equip entre els participants. </li>
          <li>· Incentivar la participació de tots els membres del grup.</li>
        </ul>
      </div>
    ),
    objectiusInf: (
      <div>
        <ul>
          <li>· Coordinar-se amb els companys durant el joc.</li>
          <li>· Guanyar rapidesa per a traslladar un objecte pesant.</li>
          <li>· Mantenir l’atenció durant l’activitat.</li>
          <li>
            · Guanyar agilitat i reflexos mentre tenen cura del seu mocador.
          </li>
        </ul>
      </div>
    ),
    material: "Un mocador i pedra per participant",
    introducció: `Aquest és un joc per treballar en equip en què cada jugador ha de posar una pedra en el camp contrari sense que li prenguin el mocador que porta a la cintura per la part de l’esquena. `,
    desenvolupament: `Delimitarem la zona de joc perquè quedi ben clara per a tots els participants. Això ho podem fer marcant al terra els dos camps. Els camps han d’estar separats uns 20 metres.

        Dividirem els participants en dos equips que quedin equilibrats físicament perquè la partida sigui més emocionant i cap equip tingui avantatge.
        
        Quan el director de l’activitat fa un senyal, els jugadors i jugadores dels dos equips, amb un mocador lligat a la cintura per la part de l’esquena, van cap al camp contrari a deixar-hi la seva pedra.
        
        Cadascú ha de vigilar que no li prenguin el seu mocador perquè si això passa ha de recuperar el mocador i tornar al seu camp per començar el joc de nou.
        
        Cada pedra col·locada al camp contrari val 10 punts. Les pedres s’han de deixar al terra però no es poden llençar. Les pedres llençades no compten punts.
        
        Al final d’un temps determinat es fa el recompte de punts i guanya l’equip que n’hagi fet més. Variants:

        Si la partida es fes massa llarga podem anar eliminant els jugadors que es queden sense mocador.
        
        Si adaptem l’espai de joc també podem anar afegint normes com: desplaçar-se amb un peu coix, anar per parelles i un dels dos amb els ulls tapats...`,
    avaluació: `Podem observar la relació que s’esdevé entre els companys de cada equip.
        Ens servirà per saber com reaccionen els infants davant del resultat de la partida.
        Si fem servir alguna de les variants proposades podem analitzar com s’ha treballat la confiança entre els membres de cada equip, quins són els infants més ràpids en desplaçar-se d’un espai a l’altre, quins companys s’ajuden entre ells...
        És un joc que ens pot donar informació sobre quins són els rols de cada infant dins d’un equip de joc.`,
    etiquetes: ["Competitiu", "Jocs de nit", "Exterior"],
    isFavorite: false,
  },
  {
    id: 26,
    title: "Tans agafo tans me'n quedo",
    descripció:
      "Joc d'agilitat i força que consisteix en agafar mocadors o fulards.",
    participants: "12-30",
    edats: "9-15 anys",
    edatmin: 9,
    edatmax: 15,
    participantsmin: 12,
    participantsmax: 30,
    espai: "Exterior/Interior",
    durada: "15mins",
    objectiusMoni: (
      <div>
        <ul>
          <li>· Donar a conèixer un joc tradicional amb una variant. </li>
          <li>· Potenciar el treball en equip entre els participants.</li>
        </ul>
      </div>
    ),
    objectiusInf: (
      <div>
        <ul>
          <li>· Coordinar-se amb els companys durant el joc.</li>
          <li>· Concentrar-se en l’objectiu del joc.</li>
          <li>· Mantenir l’atenció durant l’activitat.</li>
          <li>· Guanyar agilitat en les extremitats superiors.</li>
        </ul>
      </div>
    ),
    material:
      "Una corda de 4 o 5 metres, 50 mocadors/fulards o trossos de tela ",
    introducció: `Aquest és un joc per treballar en equip en què és imprescindible que els participants siguin ràpids en recollir els mocadors que estan a terra. `,
    desenvolupament: `Dividim els jugadors en dos equips equilibrats.

        El dinamitzador de l’activitat demana a dos jugadors – un de cada equip – que agafin una corda. Mentrestant, prepara mocadors per terra, de manera que quedin a prop dels jugadors i una mica per tot arreu.
        
        Quan el dinamitzador ho indica, amb un senyal, els jugadors estiren la corda cap a ells i intenten agafar molts mocadors dels que estan escampats per terra. Un cop un dels jugadors ha agafat 6 mocadors deixa la corda i un membre del seu equip el substitueix a la corda i segueix agafant mocadors dels que queden per terra. 
        
        Si durant el joc un dels jugadors deixa anar la corda o l’agafa amb les dues mans aquest és eliminat i passa a ser substituït per una altre membre del seu equip.
        
        La partida finalitza quan no queden mocadors al terra per a recollir.
        
        Guanya l’equip que ha aconseguit recollir més mocadors de terra.
        Variants:
        Si no tenim mocadors podem jugar estirant la corda i prou, com el joc tradicional d’estirar la corda i aquest cop jugarien tots els jugadors al mateix temps i no per torns. Aquí guanyaria l’equip que tingui més força en estirar la corda.
        
        Aquest joc també el podríem adaptar en una piscina on els infants toquin de peus a terra.`,
    avaluació: `Durant el joc podem observar com els infants es relacionen entre ells.
        Al final del joc podem preguntar als infants: com s’han sentit i què els ha semblat més difícil i com ho modificarien.
        Podem observar quines facilitats o dificultats tenen els infants a l’hora de jugar a aquesta activitat.`,
    etiquetes: ["Competitiu", "Exterior", "Jocs curts"],
    isFavorite: false,
  },
  {
    id: 27,
    title: "Caixa de sentiments",
    descripció:
      "Els infants elaboraran una caixa de sentiments on aniran depositant tots aquells sentiments que han vivenciat, descobert o que vulguin canviar.",
    participants: "Tans com vulguin",
    edats: "9-18 anys",
    edatmin: 9,
    edatmax: 18,
    participantsmin: 5,
    participantsmax: 50,
    espai: "Interior",
    durada: "1h 30m per elaborar la caixa",
    objectiusMoni: (
      <div>
        <ul>
          <li>· Ajudar a desenvolupar la competència emocional dels infant </li>
          <li>
            · Prevenir els efectes perjudicials de les emocions negatives.
          </li>
          <li>
            · Acompanyar els infants al llarg del seu itinerari emocional.
          </li>
        </ul>
      </div>
    ),
    objectiusInf: (
      <div>
        <ul>
          <li>· Adquirir un bon coneixement de les pròpies emocions.</li>
          <li>· Aprendre a identificar les emocions dels altres.</li>
          <li>· Desenvolupar habilitats per generar emocions positives.</li>
          <li>· Crear un mapa personal d’emocions.</li>
        </ul>
      </div>
    ),
    material:
      "Caixa de cartró (mida sabates), material escolar bàsic, papers de colors, retalls de revista, cola, tisores, pintura...",
    introducció: `Cada nen elaborarà la seva pròpia “caixa de sentiments” que servirà per anar guardant tot el seu itinerari emocional. Es realitzarà un taller per decorar-la de forma totalment lliure, amb papers de colors, pintures, retalls de revista... Només se’ls demanarà que reservin una part de la caixa per als sentiments “bons” i un altra part per guardar aquells sentiments considerats “dolents”.`,
    desenvolupament: `Es realitzarà un llistat dels sentiments que coneixen i han sentit algun cop, de manera que quedaran recollits en un mural separats en dos columnes segons siguin positius i negatius. És important que l’equip de monitors parli de la importància d’aprendre a posar nom a allò que sentim en el nostre dia a dia, de la gestió de les emocions i l’empatia. 

        Al llarg del curs d’esplai es dedicaran diferents sessions per tal que els infants puguin expressar els sentiments que han sentit a l’hora de realitzar alguna activitat, davant d’un conflicte o alguna cosa que els hagi passat a la família o a l’escola. Recolliran aquesta emoció escrivint-la en un paper, a través d’un dibuix, una manualitat, una fotografia, la lletra d’una cançó, etc. 
        
        L’equip d’educadors en algunes de les dinàmiques anirà presentant emocions que no hagin aparegut al llistat inicial per tal d’anar ampliant el vocabulari emocional. Aquestes paraules s’aniran afegint al mural i l’aniran enriquint.`,
    avaluació: `Al finalitzar del curs es realitzarà una dinàmica per tal que els infants se n’adonin de la gran quantitat d’emocions que són capaços de sentir. Se’ls pot proposar realitzar petites dramatitzacions on es representin les emocions viscudes, escriure petites cites on expliquin la importància de ser conscient de tot allò que sentim.`,
    etiquetes: ["Coneixença"],
    isFavorite: false,
  },
  {
    id: 28,
    title: "Siluetes carregades d'optimisme",
    descripció:
      "Dinàmica per a reflexionar sobre les qualitats positives del grup i d’un mateix.",
    participants: "10+",
    edatmin: 9,
    edatmax: 18,
    participantsmin: 10,
    participantsmax: 50,
    edats: "9-18 anys",
    espai: "Interior",
    durada: "1h aprox",
    objectiusMoni: (
      <div>
        <ul>
          <li>
            · Afavorir l'actitud de valoració positiva davant d'altres persones.{" "}
          </li>
          <li>· Treballar l’assertivitat dels membres del grup.</li>
          <li>· Fomentar la cohesió de grup.</li>
        </ul>
      </div>
    ),
    objectiusInf: (
      <div>
        <ul>
          <li>· Desenvolupar l’autoestima.</li>
          <li>
            · Expressar-se davant dels altres de manera oberta i respectuosa.
          </li>
          <li>· Reflexionar sobre un mateix.</li>
          <li>· Identificar-se amb el propi cos.</li>
        </ul>
      </div>
    ),
    material:
      "Paper d'embalar, tisores, retoladors, alguna cosa per enganxar el paper a la paret, música de fons",
    introducció: `Amb aquesta dinàmica pretenem treballar i ressaltar els aspectes positius que tenim les persones. De vegades veiem les qualitats positives de les persones que ens envolten però mai ens aturem a reflexionar sobre les nostres.`,
    desenvolupament: `Col·locarem els infants de manera que ens puguin veure tots i els donarem la consigna que ha de prevaldre durant tota l’activitat: han d’escriure aspectes positius de la persona.

        Abans de començar la dinàmica haurem retallat paper d’embalar de la mida real dels cossos dels infants. Els proposarem de posar-se per parelles i que cadascun d’ells dibuixi la silueta del seu company en el paper d’embalar que nosaltres els repartirem. Un cop marcada la silueta, cada nen o nena retallarà la seva i la pintarà amb colors suaus perquè després hi escriuran al damunt.
        
        En la mesura que els infants vagin acabant de pintar les siluetes les anirem penjant a la paret i ambientarem la sala amb una música de fons que agradi a tot al grup i que afavoreixi un bon clima.`,
    avaluació: `Quan totes les siluetes estiguin penjades donarem retoladors als infants i aquests hauran d’escriure frases positives i afirmatives a les siluetes que representen cadascun dels membres del grup. L’activitat acaba quan tothom ha pogut expressar-se en les diferents siluetes.`,
    etiquetes: ["Coneixença", "Cooperatiu", "Interior"],
    isFavorite: false,
  },
  {
    id: 29,
    title: "Els ous de la gallina",
    descripció:
      "Joc per treballar les habilitats motrius bàsiques i la cooperació.",
    participants: "9+",
    edatmin: 9,
    edatmax: 11,
    participantsmin: 9,
    participantsmax: 20,
    edats: "9-11 anys",
    espai: "Exterior/Interior",
    durada: "10mins",
    objectiusMoni: (
      <div>
        <ul>
          <li>· Desenvolupar les habilitats motrius bàsiques. </li>
          <li>· Potenciar el treball en equip.</li>
        </ul>
      </div>
    ),
    objectiusInf: (
      <div>
        <ul>
          <li>· Cooperar per assolir els objectius.</li>
          <li>· Respectar els companys i normes del joc.</li>
        </ul>
      </div>
    ),
    material: "Pilotes, cercles o cons",
    introducció: `Primerament m’agradaria dir que el nom del joc no m’agrada imposar-lo, és a dir, prefereixo que siguin els propis infants els que bategin el joc, sempre i quan sigui un grup amb el que tenim una certa continuïtat. Dit això, abans de formar els equips (mínim de 3 i un màxim de 5) explicarem les normes bàsiques del joc, d’aquesta manera ens estalviarem que el gran grup comenci a formar petits grups entre ells i no escoltin el que expliquem. Cada equip haurà de formar una petita gàbia a qualsevol punt de l’espai que disposem amb els cercles o cons on haurà de deixar les pilotes (equitatiu a cada equip), que seran metafòricament els ous.`,
    desenvolupament: `Els equips hauran d’aconseguir tenir el màxim número d’ous possible a la seva gàbia, així doncs hauran d’anar a agafar els ous de la resta de grups. Segons l’edat dels infants o la dificultat que hi vulguem posar, demanarem als infants que portin els ous a les seves respectives gàbies botant, controlant amb el peu, realitzant passades entre ells, agafats de la mà, etc. D’aquesta manera, el monitor o monitora decideix quant de temps dedica a cada partida, tot i que és aconsellable fer-les curtes per així mantenir viva la motivació. Si volem podem fer un recompte dels ous de cada gàbia per treballar la competitivitat.`,
    avaluació:
      "Finalitzarem l’activitat parlant amb els infants sobre si el joc ha anat com ells esperaven (així rebem feedback) i també com l’hem vist des de fora nosaltres, posant èmfasi en els objectius que ens havíem marcat inicialment. Si s’escau també serà el moment de posar nom a l’activitat.",
    etiquetes: ["Coneixença", "Cooperatiu", "Interior", "Exterior"],
    isFavorite: false,
  },
  {
    id: 30,
    title: "Pescar amb les mans",
    descripció:
      "Joc de confiança per treballar amb infants a partir de 6 anys.",
    participants: "Tans com vulguin",
    edats: "4-8 anys",
    edatmin: 4,
    edatmax: 8,
    participantsmin: 5,
    participantsmax: 30,
    espai: "Exterior/Interior",
    durada: "5-10mins",
    objectius: (
      <div>
        <ul>
          <li>· Treballar la confiança de grup. </li>
          <li>· Motivar la cohesió del grup.</li>
        </ul>
      </div>
    ),
    material: "Foulards",
    introducció: `Realitzar un joc de confiança amb infants de 6 anys o bé amb persones que no es coneixen no és gens fàcil, i encara menys si aquestes persones duen els ulls tapats amb fulards. Així i tot, en aquesta ocasió, recomanem un joc de confiança senzill en el qual tot el que han de fer els participants és agafar-se de les mans i aconseguir formar una rotllana. És una bona manera d’iniciar-se en el joc de confiança i aconseguir un grup més cohesionat. A partir d’aquí, i si el resultat és positiu, podrem treballar la confiança en nivells més avançats.`,
    desenvolupament: `En aquest joc, totes les persones participants aniran amb els ulls tapats i caminant, amb tranquil·litat i sense estrès, per un espai tancat i lliure. A mesura que vagin caminant per la sala poden topar-se amb d’altres persones que estiguin realitzant la mateixa dinàmica. L’objectiu de l’infant, i del grup en general, és aconseguir trobar les mans de les altres persones. Un cop aconseguit, es poden agafar de les mans. Aquesta parella o grup que s’hagi format pot anar a buscar altres persones. El joc s’acabarà quan hi hagi totes les persones agafades de les mans i formant un cercle.`,
    avaluació: `En acabar el joc, s’haurà format una rotllana amb totes les persones participants. És important que al final es faci una xerrada perquè mostrin com s’han sentit –potser no caldrà amb els infants més menuts, però sí que és aconsellable fer-ho amb preadolescents i adolescents a partir d’11 anys-. Es pot parlar de temes com la confiança en els altres companys, i es pot allargar la xerrada parlant de temes com la por al silenci, la por a la foscor, el desconegut, etc.

        Si es vol realitzar aquesta dinàmica amb música tranquil·la de fons, s’aconsegueix un clima més acollidor i relaxant.`,
    etiquetes: [
      "Coneixença",
      "Cooperatiu",
      "Interior",
      "Exterior",
      "Jocs curts",
    ],
    isFavorite: false,
  },
  {
    id: 31,
    title: "El xiclet",
    descripció:
      "Joc de coneixença per als primers dies d’esplai, on començarem a descobrir que és més el que ens uneix que el que ens separa.",
    participants: "Tans com vulguin",
    edats: "9-18 anys",
    edatmin: 9,
    edatmax: 18,
    participantsmin: 5,
    participantsmax: 30,
    espai: "Interior",
    durada: "15mins",
    objectius: (
      <div>
        <ul>
          <li>· Joc de coneixença. </li>
        </ul>
      </div>
    ),
    material: "Sense material",
    introducció: `És més el que ens uneix que el que ens separa. Per comprovar-ho, feu que els infants comencin a caminar lliurement per l’espai seguint les vostres instruccions.`,
    desenvolupament: `En primer lloc, doneu l’ordre que es facin parelles i s’expliquin en no més de 15-30 segons qui són, on viuen, quin és el seu menjar preferit, etc., i tota aquella informació bàsica que considerin necessària.

        Després d’haver fet això tres o quatre vegades, es passa a la segona part de l’activitat. Aquesta vegada, l’ordre començarà de la manera següent: “Agrupeu-vos en funció de...”, per exemple, qui li agradi anar a la muntanya o prefereixi el mar; qui li agradi més la pasta o la carn, etc.
        
        Algunes possibles unions (xiclets): mar o muntanya; color de les sabates; edat; plat de menjar favorit; escola on van / universitat / amb o sense estudis; color preferit; música preferida.
        
        Això sí, les preguntes no poden fer esment a temes físics, de gènere o de nacionalitat.`,
    avaluació: `Al final de la dinàmica es fa una reflexió sobre el que ens ha unit. Ha estat el fet de ser noi o noia, el país de procedència o la condició física, intel·lectual o sensorial? Independentment de la nacionalitat, gènere o condició física, tenim més coses en comú del que podem arribar a pensar. Això ens ha de permetre viure i conviure.`,
    etiquetes: ["Coneixença", "Interior", "Jocs curts"],
    isFavorite: false,
  },
  {
    id: 32,
    title: "L'observador",
    descripció:
      "Amb el joc de l’observador serem conscients de com la majoria de coses que ens envolten ens passen desapercebudes, sobretot si estem al medi natural!",
    participants: "Máx 25",
    edatmin: 4,
    edatmax: 11,
    participantsmin: 5,
    participantsmax: 25,
    edats: "4-11 anys",
    espai: "Exterior(vegetació)",
    durada: "20-30mins",
    objectius: (
      <div>
        <ul>
          <li>· Distingir objectes artificials en el medi natural. </li>
          <li>
            · Relacionar els colors dels objectes amb la facilitat o dificultat
            de ser vistos.
          </li>
          <li>· Reconèixer la importància dels colors en el medi natural.</li>
          <li>· Millorar l’agudesa visual i la capacitat d’observació.</li>
        </ul>
      </div>
    ),
    material:
      "Deu objectes (grapadora, retolador permanent, tisores, pinzell de fusta, animals de goma...).",
    introducció: `El joc serveix per a complementar una descoberta del medi natural amb infants. Cal realitzar-lo en un camí estret i envoltat de vegetació perquè funcioni correctament.`,
    desenvolupament: `Abans de començar l’activitat un de vosaltres amagarà deu objectes artificials a banda i banda del camí. Poseu-los per les vores o penjats dels arbustos vigilant de no amagar-los molt o massa amunt, no ha de ser molt difícil que els nens i nenes els vegin!
        Després, explicarem al grup el funcionament del joc: farem una fila al començament del camí, sortiran d’un en un amb una distància d’uns 2-3 metres entre ells i caminaran en silenci mirant a banda i banda i comptant mentalment els objectes que vegin sense tocar, ni agafar, ni assenyalar res. Eviteu dir quants hi ha o quins són per a no condicionar-los.`,
    avaluació: `Quan tothom hagi acabat l’itinerari, pregunteu quants han vist i quins recorden. Podeu comparar la seva agudesa visual amb la d’alguns animals: si han vist entre 0 i 4 objectes tenen vista de talp, entre 5 i 8 vista de gos i si n’han vist 9 o 10 vista d’àliga. Farem la reflexió de que tot i que sabien que hi havia objectes amagats no els han pogut veure tots... a la natura hi ha moltes coses que no veiem!
        Desfarem el camí recollint els objectes i aprofitarem per parlar de quins colors han estat més fàcils de veure i quin significat tenen a la natura: camuflatge, alerta de perill, atracció d’insectes pol·linitzadors...`,
    etiquetes: ["Coneixença", "Exterior"],
    isFavorite: false,
  },
  {
    id: 33,
    title: "Un dia d'excursió",
    descripció:
      "Cançó, amb una part de dansa i de joc, on es treballa l'expressió corporal, la dramatització i l'imaginari.",
    participants: "Mín 25",
    edats: "9-11 anys",
    espai: "Interior/Exterior",
    edatmin: 9,
    edatmax: 11,
    participantsmin: 25,
    participantsmax: 50,
    durada: "10-20mins",
    objectiusMoni: (
      <div>
        <ul>
          <li>· Potenciar la confiança de cada infant. </li>
          <li>
            · Crear vincles de confiança i llaços més forts amb cada infant i
            amb el col·lectiu.
          </li>
          <li>· Crear un clima motivador que il·lusioni als infants.</li>
        </ul>
      </div>
    ),
    objectiusInf: (
      <div>
        <ul>
          <li>
            · Descobrir i experimentar gestos i moviments com a recursos
            corporals per a comunicar-se, mostrant confiança en les pròpies
            possibilitats expressives.
          </li>
          <li>
            · Participar activament i mostrar plaer per interpretar, cantar i
            ballar.
          </li>
        </ul>
      </div>
    ),
    material: "Instrument/s de música, però es pot fer sense.",
    introducció: `Aquesta cançó l'hem de fer en un espai ampli, sense obstacles, on els nens i nenes puguin moure's i ballar lliurement.`,
    desenvolupament: `Els hi fem fer una rotllana i els posem en situació: “Ha arribat el moment d'anar d'excursió! (Els hi fem fer les accions, imaginàriament. Ara posarem només uns exemples però podem afegir-ne tants com vulguem). Agafem les motxilles, que pesen molt, la càmera de fer fotografies i ens posem la gorra, perquè fa molt de sol. Per no cremar-nos pel sol, ens posem la crema solar pels braços, per les cames i per la cara. Tots estem a punt?”. 

        Cançó:
        
        DO SOL
        
        Un dia d'excursió anava a la muntanya
        
        FA SOL DO
        
        amb els meus amics.
        
        SOL
        
        Volia retratar tot allò que veia
        
        FA DO
        
        al llarg del camí. 
        
        (Fins aquí el ball i/o moviments han estat lliures. Se'ls pot posar en situació: “el camí fa molta pujada!”, “és un prat ple de flors i les aneu olorant”...) 
        
        FA
        
        De sobte un esquirol
        
        (Poden aparèixer animals del bosc, com un porc senglar, un pardalet... però també podem deixar anar la nostra imaginació i fer aparèixer d'altres personatges: una princesa, Superman, la caputxeta, Messi... A partir que es diu el nom de l'animal o del personatge. I els infants s'han de posar en el paper i interpretar-lo amb gestos i al ritme de la cançó.)
        
        SOL
        
        va aparèixer
        
        DO SOL Lam
        
        la foto fa “clic”
        
        FA SOL
        
        i així va sortir! 
        
        (Els nens i nenes fan una estàtua tot imitant l'animalet o personatge que ha dit l'animador o animadora. No es podran moure fins que torni a sonar la cançó. Es pot repetir les vegades que faci falta amb tants personatges com vulgueu.)`,
    avaluació: `És una cançó per passar-ho molt bé durant l'execució, però un cop feta podem aprofitar per parlar de temes que es poden extreure. Per exemple:

        -En moltes ocasions, i cada vegada més, trobem nens i nenes que no estan acostumats a fer excursions, i les poden trobar cansades i feixugues. És el moment de girar la truita i fer veure que no és del tot així.
        
        -El valor de l'amistat. Com n'és de divertida una excursió amb els amics i amigues.
        
        -Podem aprofitar per parlar d'animals. On viuen, què mengen, etc.`,
    etiquetes: ["Coneixença", "Exterior", "Interior", "Cooperatiu"],
    isFavorite: false,
  },
  {
    id: 34,
    title: "El càsting de l'autoestima",
    descripció:
      "Dinàmica per a treballar l'autoestima mitjançant la pròpia percepció i la dels companys del grup.",
    participants: "8-15",
    edats: "4-15 anys",
    edatmin: 4,
    edatmax: 15,
    participantsmin: 8,
    participantsmax: 15,
    espai: "Interior",
    durada: "90 mins",
    objectiusMoni: (
      <div>
        <ul>
          <li>· Afavorir el treball de l'autoestima personal i grupal. </li>
          <li>· Treballar la cohesió del grup.</li>
          <li>
            · Emfatitzar les qualitats positives de tots els membres del grup.{" "}
          </li>
        </ul>
      </div>
    ),
    objectiusInf: (
      <div>
        <ul>
          <li>· Conèixer les pròpies qualitats personals més positives.</li>
          <li>· Observar quines qualitats veuen els altres en mi.</li>
          <li>· Valorar les qualitats dels companys.</li>
          <li>· Augmentar la confiança en un mateix.</li>
        </ul>
      </div>
    ),
    material:
      "Paper,bolígrafs, smartphones i tauleta o televisió per visionar els vídeos finals",
    introducció: `El monitor/a explica als participants que en unes setmanes començarà un programa a la televisió i que des de la productora s'han posat en contacte amb l'esplai o cau per oferir que els joves hi participin. Per tal de valorar les seves possibilitats de participació, cal que facin un vídeo de cadascú que enviaran a l'equip de càsting del programa perquè prengui una decisió.`,
    desenvolupament: `Per tant, cal fer un vídeo de cada membre del grup tot destacant les seves qualitats personals. Com ho farem? Primerament, cadascú pensarà les que considera que són les seves virtuds i elements positius de la seva personalitat, relació amb els altres, caràcter, etc. Ho apuntarà tot en un paper i pensarà com ho explicarà tot al seu vídeo.

        Un cop cadascú ha pensat en les seves pròpies qualitats, serà moment de reunir a tot el grup. Aleshores, el monitor dirà el nom d'un dels joves i tots els altres li hauran de dir quines qualitats positives veuen en ell. Cadascú afegirà al seu paper les qualitats que han afegit els altres i que ells no havien considerat. Finalment, cada jove tindrà al seu full les qualitats pensades per ell mateix i les afegides pels companys.
        
        Serà el moment d'agafar un smartphone perquè cadascú es presenti tot parlant de les qualitats apuntades.`,
    avaluació: `Després de fer totes les gravacions individuals, en una tauleta, smarpthone o televisor posarem en comú tots els vídeos. D'aquesta manera, ja tindrem tot el material per enviar a la productora. Amb aquesta dinàmica, els joves hauran treballat la seva autoestima tot posant en valor les seves qualitats i, a més, observant quins aspectes positius veuen els seus companys en ells.`,
    etiquetes: ["Coneixença", "Interior", "Cooperatiu"],
    isFavorite: false,
  },
  {
    id: 35,
    title: "M'explico?",
    descripció:
      "Joc que consisteix en familiaritzar-se amb un objecte mitjançant el tacte tot tenint els ulls embenats. El participant que toca la figura l'ha de definir de manera que l'altre participant pugui dibuixar-la sense haver tingut cap contacte amb aquesta.",
    participants: "+2(sempre parells)",
    edats: "9-11 anys",
    edatmin: 9,
    edatmax: 11,
    participantsmin: 2,
    participantsmax: 20,
    espai: "Interior/Exterior",
    durada: "30 mins",
    objectiusMoni: (
      <div>
        <ul>
          <li>
            · Dinamitzar l'activitat per tal que els participants entenguin i
            segueixin les normes.{" "}
          </li>
          <li>
            · Supervisar el transcurs de l'activitat identificant i solucionant
            possibles malentesos.{" "}
          </li>
        </ul>
      </div>
    ),
    objectiusInf: (
      <div>
        <ul>
          <li>
            · Identificar mitjançant el tacte la forma i la textura d'un
            objecte.
          </li>
          <li>
            · Aprendre a fer una descripció coherent que altres entenguin.
          </li>
          <li>· Escoltar i donar importància a allò que diuen els companys.</li>
        </ul>
      </div>
    ),
    material:
      "Diversos objectes amb diferents formes i textures, bena o mocador, paper i llapis",
    introducció: `Els dos membres de la parella s'han de situar donant-se l'esquena. Un d'ells romandrà amb els ulls tapats amb una bena o mocador i tindrà un objecte que no haurà vist prèviament. L'altre participant, que tampoc haurà vist l'objecte, l'haurà de dibuixar seguint la descripció del company.`,
    desenvolupament: `Quan els participants estiguin disposats correctament, es tapen els ulls d'un dels membres de la parella i posteriorment se li entrega un objecte. Mentre es familiaritza amb l'objecte l'ha d'anar descrivint de manera que l'altre membre de la parella pugui plasmar al paper allò que ell està tocant. Un cop acabat el dibuix, els dos participants poden veure l'objecte, de manera que podran comparar la realitat amb el que ells han percebut, descrit, entès i dibuixat.`,
    avaluació: `Quan els participants veuen el dibuix al costat de l'objecte, és important que valorin com s'ajusta a la realitat. Tot i saber dibuixar millor o pitjor, el que és important, és que siguin capaços de reconèixer aquelles parts que han sabut identificar mitjançant el tacte i de quina manera ho han comunicat, així com l'atenció que prenem al que ens expliquen els altres. Sovint les persones no ens entenem, ja sigui perquè no ens sabem explicar o perquè interpretem els missatges d'una altra manera. Conèixer aquesta realitat ens pot ajudar a millorar la nostra comunicació.`,
    etiquetes: ["Coneixença", "Interior", "Jocs curts"],
    isFavorite: false,
  },
  {
    id: 36,
    title: "Creences limitadores de gènere",
    descripció:
      "Meditació – visualització per detectar alguns dels propis introjectes o creences limitadores de gènere.",
    participants: "Grup de monitors",
    edats: "Monitors",
    espai: "Interior",
    edatmin: 18,
    edatmax: 18,
    participantsmin: 2,
    participantsmax: 10,
    durada: "40 mins",
    objectius: (
      <div>
        <ul>
          <li>· Identificar els rols de gènere propis </li>
          <li>
            · Reflexionar sobre com els introjectes afecten a la pràctica{" "}
          </li>
          <li>
            · Millorar la tasca com educador/a pel que fa a la transmissió de
            rols de gènere
          </li>
        </ul>
      </div>
    ),
    material: "Coixins, màrfegues, mantes, música relaxant",
    introducció: `La dinàmica comença amb una meditació - visualització per tal que els monitors/es vagin connectant amb els seus propis introjectes o creences limitadores. Després procurarem fer una integració d'allò viscut i, finalment, proposarem una discussió en grup per a prendre decisions i millorar la pròpia pràctica.`,
    desenvolupament: `Com a dinamitzador/a, demana als monitors/es que es posin còmodes. Per fer-ho poden utilitzar tots els materials disponibles. Demana'ls que respirin i que concentrin l'atenció en la respiració. Posa música suau, relaxant. A poc a poc, demana'ls-hi, també, que vagin relaxant els músculs.

        Amb temps, demana'ls que rememorin una frase o una imatge de quan eren petits. Una imatge en la qual el seu pare, la seva mare, la seva germana o germà, els seus avis, algun amic/ga els estigui dient alguna cosa que poden o no poden fer. Alguns exemples, si ho vols: els nens no ploren, no t'embrutis, les noies boniques no contesten, estàs més guapa amb faldilla, els nois no juguen amb nines, etc.
        
        Seguidament, proposa que evoquin una imatge de la seva adolescència. Que mirin com aquesta frase està present en les seves vides, com condiciona el seu dia a dia o alguna situació concreta. Amb els amics, amb ell/a mateix/a... Finalment, demana que facin el mateix amb una imatge de l'actualitat.
        
        Per integrar aquesta frase, se'ls pot demanar que, dintre de la mateixa visualització, identifiquin la frase dintre del seu cos i que li posin forma, olor, color i/o textura i que, poc a poc, imaginin que surt pel melic i que la deixen anar, amb suavitat i amor. Cal que li donin les gràcies i la deixin anar amb tranquil·litat i alliberament. Amb aquesta sensació, donarem per acabada la visualització i demanarem als participants que tornin a la sala.`,
    avaluació: `A continuació posarem en comú les sensacions i emocions viscudes per cadascun dels monitors i les monitores. Quines han estat aquestes frases? Quines han estat les conseqüències que heu pogut veure? També farem una reflexió conjunta de com aquests introjectes i limitacions els traslladem, cadascú, a la nostra tasca educativa. Recordem que l'actitud del dinamitzador/a ha de ser amorosa i respectuosa amb el que vagi sortint. És important no jutjar i donar espai perquè tothom qui ho vulgui pugui compartir allò que li succeeix.`,
    etiquetes: ["Coneixença", "Narració i expressió", "Interior"],
    isFavorite: false,
  },
  {
    id: 37,
    title: "Foques, deixalles i ecologistes",
    descripció:
      "Els infants es posaran a la pell dels animals marins per tal de prendre consciència de la importància de no abocar deixalles al mar.",
    participants: "15-50",
    edats: "9-11 anys",
    edatmin: 9,
    edatmax: 11,
    participantsmin: 15,
    participantsmax: 50,
    espai: "Exterior/Interior",
    durada: "20-30 mins",
    objectiusMoni: (
      <div>
        <ul>
          <li>
            · Transmetre la importància de no abocar deixalles al mar ni als
            rius.{" "}
          </li>
          <li>· Potenciar una relació més sostenible amb el medi ambient. </li>
        </ul>
      </div>
    ),
    objectiusInf: (
      <div>
        <ul>
          <li>
            · Identificar els problemes provocats per l'acumulació de deixalles
            al mar.{" "}
          </li>
          <li>
            · Relacionar les conductes poc sostenibles amb les seves
            conseqüències.
          </li>
        </ul>
      </div>
    ),
    material: "Pinces d'estendre la roba, gomets o barres de maquillatge",
    introducció: `Les activitats humanes generen tones de deixalles. Alguns d'aquests residus són abocats directament al mar o hi arriben des dels rius, rieres, torrents... Aquesta acumulació provoca molts problemes en l'ecosistema marí: aigua contaminada, residus sòlids que impedeixen la fotosíntesi de les algues, animals ferits amb les deixalles...`,
    desenvolupament: `Començarem l'activitat preguntant si alguna vegada han vist deixalles a la platja o a les roques. On creuen que va a parar tota aquesta brossa? Quins problemes creuen que ocasiona? Farem un joc que ens ajudarà a entendre com afecta això als animals marins.

        Es divideix el grup en 3 subgrups: foques, deixalles i ecologistes. Podem fer servir gomets o barres de maquillatge per a distingir els subgrups. Les foques han de sortir d'un dels costats del camp de joc que representarà les platges on viuen aquests animals. Hauran d'anar al costat contrari del camp de joc (que representarà el mar obert) a buscar aliment (simbolitzat amb pinces d'estendre la roba) i tornar a la platja per donar l'aliment a les seves cries (acumularan les pinces a la platja).
        
        Dins del camp de joc hi haurà el subgrup de deixalles que hauran d'intentar tocar a les foques. El primer cop que una deixalla toca una foca aquesta ha d'anar a peu coix, el segon cop només pot fer servir una mà i el tercer cop queda eliminada ja que no pot sobreviure a les ferides ocasionades.
        
        Quan fa uns 2-3 minuts que ha començat el joc surt el subgrup d'ecologistes que "netegen el mar" i per tant han d'agafar les deixalles per tal d'eliminar-les.
        
        Si volem allargar el joc, podem simular que hi ha un abocament massiu i les deixalles que han tret els ecologistes tornen al mar. Podem fer vàries rondes intercanviant els papers entre els subgrups.`,
    avaluació: `Un cop acaba l'activitat, caldrà fer la reflexió conjunta i entre tots fer propostes que puguin ajudar a reduir aquest greu impacte en l'ecosistema marí.`,
    etiquetes: [
      "Coneixença",
      "Narració i expressió",
      "Cooperatiu",
      "Exterior",
      "Interior",
    ],
    isFavorite: false,
  },
  {
    id: 38,
    title: "Micro arquitectures imaginàries",
    descripció:
      "Taller d'expressió plàstica per a treballar la creativitat i la percepció de l'espai urbà a partir de la construcció de maquetes d'edificis.",
    participants: "Fins 10",
    edats: "12-15 anys",
    edatmin: 12,
    edatmax: 15,
    participantsmin: 1,
    participantsmax: 10,
    espai: "Exterior/Interior",
    durada: "2-3h",
    objectius: (
      <div>
        <ul>
          <li>
            · Treballar la creativitat a partir de l'atzar i de formes
            geomètriques bàsiques.{" "}
          </li>
          <li>
            · Percebre i entendre les formes de l'entorn a partir del volum i
            l'espai.
          </li>
          <li>
            · Treballar tècniques concretes: planxa de fang, construcció de
            maquetes amb porexpà, textures a partir de diferents materials, etc.
          </li>
        </ul>
      </div>
    ),
    material: `Necessitarem un material general per a realitzar l'activitat:

        Folis (1 per cada infant).
        Llapis.
        Regles.
        Dos daus.
        Témperes o acrílics per a pintar el treball un cop acabat.
        Pinzells i pots per a l'aigua.
        Plats de plàstic per a fer barreges de colors.
        Palets, branquetes, i qualsevol material per a decorar la nostra maqueta.
        I un altre d'específic segons la tècnica que fem servir:
        
        a. L'activitat es pot realitzar a partir d'un treball amb pastes: fang, plastilina, etc. En aquest cas, necessitarem també:
        
        Fang.
        1 corró.
        2 llistons de fusta per a fer les planxes de fang.
        Estris per a treballar el fang o ganivets de plàstic. 
        b. O a partir de materials rígids com el cartró, cartró ploma, porexpà, etc. En aquest cas, necessitarem també:
        
        Cartró gruixut o planxa de porexpà.
        Retalls de cartrons o trossos de porexpà reciclats.
        Cola blanca.
        Ganivets de plàstic.
        Tisores.
        Cinta adhesiva de paper.`,
    introducció: `En primer lloc, dibuixem entre 5 i 8 línies sobre un foli. Poden ser rectes, circumferències senceres o part de les circumferències. Per a fer-ho podem fer servir regles i objectes circulars com a plantilla.`,
    desenvolupament: `Quan cada infant hagi dibuixat les seves línies, començarem a donar alçades a les parets dels nostres edificis i ho farem gràcies a l'atzar. El monitor farà 5 tirades de 2 daus i l'alçada de les parets serà la suma resultant de la tirada. Cada infant pot triar a quina línia o a quin punt d'una línia del dibuix li dóna el valor de la tirada, i així anem determinant les alçades de les parets del nostre edifici. Podeu fer tantes tirades com línies han dibuixat o una o dues menys per deixar algunes línies sense valor i per tant, sense alçada.

        Determinades les alçades, comencem a construir les parets. Depenent del material que fem servir, haurem de variar lleugerament alguns del següents passos:
        
        -Si ho fem sobre planxa de fang o plastilina, repassem les línies del foli a la planxa amb un punxó i ja podem començar a pujar les parets, a sobre de cada línia.
        
        -Si fem servir altres materials com cartró, poliestirè expandit (porexpà), etc., podeu calcar les línies del foli amb paper de calcar o directament enganxar el foli sobre la superfície.
        
        Per poder enganxar les parets assegureu-vos que feu servir una cola o adhesiu adient perquè no caiguin.
        
        Quan acabem de pujar parets podem començar a cobrir espais fent teulades, sostres, portes, finestres, vidrieres, etc. a partir de les formes que ens suggereixin les parets de la nostra construcció. També podem decorar l'interior i els voltants de la casa. Si fem servir pastes o fang hi podem posar palets per a fer les bigues del sostre, palletes de beguda, palla... Si ho fem amb cartró o poliestirè expandit, hi podem afegir cartolines de colors, tela de sac.. Si ho hem fet amb fang o amb un cartró gruixut, un cop seca l'estructura podem pintar-la amb témperes de colors o acrílics, molt adients per a pintar a sobre del porexpà.`,
    avaluació: `Afavorim el treball creatiu i potenciem l'observació de l'entorn i la relació entre els membres del grup. Acabades les maquetes, podem exposar-les en conjunt formant una ciutat.`,
    etiquetes: ["Coneixença", "Cooperatiu", "Exterior", "Interior"],
    isFavorite: false,
  },
  {
    id: 39,
    title: "La taronja i la llimona",
    descripció:
      "Joc de coneixença tant per a monitors com per a infants o joves en què una resposta ràpida serà molt important per a l’execució de l’activitat.",
    participants: "Mín 10",
    edats: "9-18 anys",
    edatmin: 9,
    edatmax: 18,
    participantsmin: 10,
    participantsmax: 20,
    espai: "Exterior/Interior",
    durada: "10-15mins",
    objectiusMoni: (
      <div>
        <ul>
          <li>
            · Fomentar la participació i motivació entre els infants o joves.{" "}
          </li>
          <li>· Conèixer els diferents membres de l’esplai o grup.</li>
          <li>
            · Facilitar la primera presa de contacte amb els membres de l’esplai
            o grup.
          </li>
        </ul>
      </div>
    ),
    objectiusInf: (
      <div>
        <ul>
          <li>· Treballar la resposta ràpida. </li>
          <li>· Conèixer els diferents companys de l’esplai o grup.</li>
          <li>· Ser capaç d’obrir-se vers la resta de companys.</li>
        </ul>
      </div>
    ),
    material: "Sense material",
    introducció: `Primer de tot caldrà fer una rotllana amb tots els participants del joc. Un cop feta la rotllana, tots els membres es presentaran i el dinamitzador demanarà un voluntari perquè es col·loqui al mig. La feina d’aquesta persona serà girar sobre si mateixa i assenyalar una persona del cercle i dir: “TARONJA” o “LLIMONA”. La persona assenyalada, depenent de si el del mig ha dit una fruita o l’altra, haurà de dir ràpidament el nom de la persona que hi ha a la seva esquerra (TARONJA) o dreta (LLIMONA). Si s’equivoca o tarda massa en dir-ho, anirà al mig.`,
    desenvolupament: `Un cop la dinàmica ha estat interioritzada pels participants i la velocitat de resposta sigui suficientment ràpida, començarem a afegir variants. En comptes de dir el nom de la persona, n’haurem de dir l’edat, el lloc de naixement, el color preferit, etc. Una altra variant és que el del mig pot dir, quan vulgui, la paraula “MACEDÒNIA”; això significarà un canvi de posició de tots els membres del cercle.`,
    avaluació: `Quan observem que ja hem dut a terme totes les variants i els participants del joc ja responen amb certa facilitat, podem donar l’activitat per acabada i observar si:

        Tots els membres del grup és coneixen i saben els noms.
        Els participants han anat interioritzant les diferents variants que s’han afegit.
        Els participants s’han mostrat oberts i disposats a deixar-se conèixer per la resta del grup, tot i ser la primera presa de contacte.`,
    etiquetes: [
      "Coneixença",
      "Cooperatiu",
      "Exterior",
      "Interior",
      "Jocs curts",
      "Sense material",
    ],
    isFavorite: false,
  },
  {
    id: 40,
    title: "Construint l'esplai",
    descripció:
      "A partir de materials diversos i eines d’ús bàsiques elaborarem amb les mans una figura que exemplifiqui l’esplai ideal donant resposta a preguntes i plantejaments sobre el projecte.",
    participants: "Indiferent",
    edats: "4-18 anys",
    edatmin: 4,
    edatmax: 18,
    participantsmin: 1,
    participantsmax: 20,
    espai: "Exterior/Interior",
    durada: "1h",
    objectius: (
      <div>
        <ul>
          <li>· Definir projectes per al curs. </li>
          <li>· Saber decidir en grup.</li>
        </ul>
      </div>
    ),
    material: "Tisores, cola, cinta adhesiva, material reutilitzable",
    introducció: `Després d’haver situat els participants, deixarem lliurament per l’espai que construeixin l’esplai que volen. `,
    desenvolupament: `Podem donar consignes i fer preguntes: Què li falta a l’esplai? Quins grups hauria de tenir? Què volem fer durant aquest curs? D’aquesta manera facilitem que els participants es facin preguntes a ells mateixos i reflexionin. 

        Addicionalment, si veiem que el grup no genera allò que esperàvem, podem fer grups petits per iniciar les construccions i a mitja dinàmica unir-los.`,
    avaluació: `Situarem tots els participants al voltant de la construcció. En primer lloc i en silenci, tothom haurà d’observar-la sense fer cap valoració en veu alta. Posteriorment, seurem tots al seu voltant i valorarem l’estructura en conjunt: què hi veiem, què hi trobem a faltar, què ens agrada més i què menys. En segon terme, direm quina part hem construït, si ha estat de nova construcció o si ens hem inspirat afegint elements a la construcció d’un company i el motiu pel qual ho hem fet així. 

        Finalment, conclourem amb els objectius aconseguits i analitzarem les conclusions a les quals hem arribat de l’esplai ideal que volem.`,
    etiquetes: ["Cooperatiu", "Exterior", "Interior"],
    isFavorite: false,
  },
  {
    id: 41,
    title: "S'ha acabat el temps!",
    descripció:
      "Joc en equip per treballar la memòria i conèixer nous personatges de la vida quotidiana.",
    participants: "Tants com vulguin",
    edatmin: 12,
    edatmax: 15,
    participantsmin: 1,
    participantsmax: 30,
    edats: "12-15 anys",
    espai: "Exterior/Interior",
    durada: "30mins",
    objectius: (
      <div>
        <ul>
          <li>· Treballar l’habilitat lingüística definint personatges. </li>
          <li>· Perdre la vergonya davant del grup.</li>
        </ul>
      </div>
    ),
    material: "Paper, bolígrafs, rellotge de sorra",
    introducció: `Hem fet un dinar amb amics a casa d’un d’ells, estem prenent alguna cosa en algun bar amb una colla, és un dissabte a la tarda a l’esplai i no hem tingut temps per a preparar un bon joc, hem fet una trobada familiar i tenim ganes de passar una bona estona…

        Tot són bones excuses per a fer un joc. I si no en tenim cap de concret i en volem fer un de ben divertit, una de les solucions que us plantegem és que jugueu al proper joc: econòmic, divertit, divers (sempre usarem personatges diferents), etc.`,
    desenvolupament: `Cada jugador agafarà dos paperets (o tres, si som menys de vint persones) i hi escriurà el nom d’alguna persona o personatge que tothom conegui (pot ser un polític, un actor, un esportista, un personatge de ficció... el que sigui, sempre i quan pensem que tots els jugadors, o, si més no, la majoria, sabran qui és). Un cop fet això es recullen tots els paperets en una sola pila.

        Dividirem la gent en dos equips, que podran ser tan nombrosos com calgui.
        
        D’un en un, els membres de cada equip, de forma alternada, s’aixequen i agafen la pila de paperets. 
        
        Primera ronda
        
        A la primera ronda la persona que té la pila de paperets ha de descriure els personatges que hi van apareixent. Per exemple, si en el paperet hi posa “John Lennon” pot dir: “Un membre dels Beatles que portava ulleres i que el van matar...”. La descripció del personatge continua fins que els membres del seu equip ho endevinen. Aleshores el jugador entrega el paperet al seu equip i descriu la persona escrita en el següent paperet. Així successivament fins que s'acaba el temps, marcat per un rellotge de sorra o per algú que tingui un cronòmetre al mòbil, el qual cridarà “S’ha acabat el temps!” (recomanem 40 segons, que és un temps prudencial).
        
        Quan s'han acabat tots els paperets es compta quants n'ha aconseguit cada equip.
        
        Segona ronda
        
        A la segona ronda es fan servir els mateixos paperets que a la primera, de forma que els jugadors han d'intentar recordar, a mesura que es van endevinant a la primera ronda, quins personatges hi havia en els paperets.
        
        En aquesta ronda, però, només podrem dir una sola paraula per personatge. Per exemple, quan surti el paperet de John Lennon només podrem dir “Beatles!”, o “Ulleres!”, o la paraula que ens sembli que més ajudarà a encertar el personatge.
        
        Si veiem que el nostre equip no endevina el personatge no podem dir una altra paraula. El que hem de fer és posar el paperet a sota la pila, perquè al cap d'una estona torni a sortir, i continuar amb el següent paperet.
        
        La mecànica segueix igual fins que s'han endevinat tots els paperets. Es compta quants n'ha aconseguit cada equip i se suma a la puntuació anterior. 
        
        Tercera ronda
        
        En aquesta ronda el jugador que té la pila de paperets ha de fer endevinar el personatge al seu equip només fent mímica. Això pot semblar difícil, però cal tenir en compte dues coses. Primera, que els personatges són els mateixos que han sortit a les dues rondes anteriors. I segona, que si un personatge no s’endevina es posa a sota la pila de paperets i torna a sortir més endavant, de forma que la persona a qui no li han endevinat el personatge abans és ara qui ha d’endevinar-lo.
        
        Quan s'han acabat tots els paperets es calcula la puntuació final.`,
    avaluació: `Sovint, i si és la primera vegada que hi juguem, aquest joc ens motiva d’una manera que ens demana que hi tornem a jugar. Si així es presenta l’ocasió, paga la pena repetir el joc amb d’altres personatges: d’aquesta manera, en coneixerem de nous.

        De vegades, pot passar que el personatge s’hagi repetit més d’una vegada. És un bon joc per treballar la memòria i recordar com han definit els companys els personatges per usar estratègies pròpies`,
    etiquetes: ["Cooperatiu", "Exterior", "Interior"],
    isFavorite: false,
  },
  {
    id: 42,
    title: "Memory de sons",
    descripció:
      "A través de l’oïda intentarem relacionar les diferents parelles segons el so que provoquen quan sacsegem els diferents pots.",
    participants: "Parelles o equips",
    edats: "4-15 anys",
    edatmin: 4,
    edatmax: 15,
    participantsmin: 4,
    participantsmax: 20,
    espai: "Exterior/Interior",
    durada: "20mins",
    objectius: (
      <div>
        <ul>
          <li>· Treballar l’oïda buscant les parelles de sons </li>
          <li>· Potenciar la capacitat d’escolta i concentració </li>
          <li>· Treballar la memòria visual</li>
          <li>· Jugar mentre eduquem l’oïda</li>
        </ul>
      </div>
    ),
    material: `Pots de carrets de fotografies, o pots que siguin iguals i opacs (que no es vegi l’interior)
        Arròs, llenties, sorra, pedres, aigua, cigrons, botons, petxines, etc.`,
    introducció: `Agafarem uns quants pots de carrets de fotografia d’aquells negres, o altres recipients que ens permetin ficar-hi coses dins i que no es vegi el seu interior.

        Per parelles de pots, i anirem posant arròs, un cigró, aigua, llenties, sorra, botons, etc. I anirem construint diferents parelles que tindran el mateix so entre cadascuna d’elles.`,
    desenvolupament: `Escampem els pots pel terra i els barregem. Per equips o per parelles, cadascú té un torn, hem d’agafar un pot i sacsejar-lo a la vora de l’orella, després agafar-ne un altre i sacsejar-lo i escoltant si és el mateix so que l’anterior.

        Si no coincideix, deixarem els pots allà on els hem trobat per després recordar on estaven aquells sons que ja hem escoltat. Si coincideixen, ja tenim un parella!
        
        Guanya qui més parelles ha aconseguit aparellar. Serà el que té l’oïda més fina!`,
    avaluació: `Es comprova, obrint els pots que les parelles es corresponen`,
    etiquetes: ["Cooperatiu", "Exterior", "Interior", "Narració i expressió"],
    isFavorite: false,
  },
  {
    id: 43,
    title: "El secret",
    descripció:
      "Dinàmica de grup, tant per a infants com per a l’equip de monitors/es per detectar com podem discriminar sense ni adonar-nos-en.",
    participants: "Tants com vulguin",
    edats: "9-18 anys",
    edatmin: 9,
    edatmax: 18,
    participantsmin: 1,
    participantsmax: 30,
    espai: "Interior",
    durada: "45mins(5 mins/persona)",
    objectius: (
      <div>
        <ul>
          <li>
            · Desenvolupar empatia amb una persona que se sent discriminada.{" "}
          </li>
          <li>
            · Reflexionar sobre els motius que provoquen la discriminació d’una
            persona en relació al grup.{" "}
          </li>
          <li>· Analitzar la nostra actitud en relació a la resta.</li>
          <li>· Ser capaços de detectar casos de discriminació.</li>
        </ul>
      </div>
    ),
    material: `Foulard, pilota`,
    introducció: `Sense voler podem discriminar infants i joves. Per exemple, jugant.`,
    desenvolupament: `Menys una persona, la resta seieu a terra amb els peus junts i els genolls aixecats, de tal forma que quedi un túnel tancat entre les cames.

        S’explica que aquest grup amaga un secret: el mocador (o pilota). Però la persona que no és al cercle no sap què és. Ha d’esbrinar-ho assenyalant el/la company/a que el té amagat. Mentrestant, la resta es va passant el mocador per sota de les cames. No hi ha límits de direcció, però no pot rodar fora del túnel. Quan la persona troba el mocador, s’integra al grup i a qui li ha descobert passa a ser qui l’ha de trobar.
        
        Després de diverses partides, s’atura el joc i es fa la reflexió. Es poden plantejar les següents preguntes:
        
        Com s’han sentit les persones que han hagut de descobrir el secret?I les que formaven part del grup? Feien algun tipus de comentaris? Quins?Ens hem sentit discriminats/des alguna vegada? Quan? Per què? En coneixem el motiu? Tenien motius per fer-ho?La resta, heu discriminat mai ningú? Per què? Era realment just?
        
        Per fer-ho fins i tot millor, un grupet es queda fora de la sala i van entrant d’un en un. Així desconeixen l’existència del mocador.`,
    avaluació: `Qualsevol detall serveix per discriminar. Cal fer notar el sentiment d’impotència, incomprensió i solitud de la persona discriminada i, per contra, com el grup no s’escandalitza, perquè ho troba normal. `,
    etiquetes: ["Cooperatiu", "Interior"],
    isFavorite: false,
  },
  {
    id: 44,
    title: "Cavallers, princeses i dracs",
    descripció: "El joc de Pedra-Paper-Tisora, amb els rols canviats.",
    participants: "Tants com vulguin",
    edatmin: 9,
    edatmax: 18,
    participantsmin: 1,
    participantsmax: 30,
    edats: "9-18 anys",
    espai: "Interior/Exterior",
    durada: "5 mins",
    objectius: (
      <div>
        <ul>
          <li>· Trencar els rols clàssics de gènere. </li>
        </ul>
      </div>
    ),
    material: `Sense material`,
    introducció: `Per què els homes han de ser els forts i els valents, i les dones les més sensibles i dèbils? Això és així al món dels contes, i a la vida real?
        Per introduir aquest tema, ja sigui amb infants i joves o amb monitors i monitores, varieu el joc de Pedra-Paper-Tisora per: Cavaller-Princesa-Drac.`,
    desenvolupament: `Es creen dos grups i se situen un al davant de l?altre a una distància de tres a cinc metres. Cada grup decidirà quin rol agafa i, a la de tres, haurà de representar amb un gest i/o expressió el personatge escollit. Es dóna un punt a l?equip que guanya la partida, i així successivament.
        Qui guanya a qui?
        El cavaller mata el drac.El drac es menja la princesa.La princesa guanya el príncep.`,
    avaluació: `Es tracta d'una activitat on es trenca el rol de gènere: és la dona qui guanya l'home, i no se la representa com una persona submisa a ell. S'esborra la imatge de la princesa que només fa que esperar el seu príncep blau que vingui a rescatar-la. Es pot utilitzar com a breu activitat per introduir el tema del gènere amb l'equip de monitores i monitors o amb el grup de joves. A partir d'aquí es pot reflexionar sobre els rols que sempre s'associen a homes i dones. Un punt de partida són els contes clàssics.
 
        Amb infants no caldrà fer tota aquesta reflexió, però sí que caldrà apuntar com és que la dona pot guanyar el príncep, i si a la vida real és així.`,
    etiquetes: ["Cooperatiu", "Jocs curts", "Interior"],
    isFavorite: false,
  },
  {
    id: 45,
    title: "Qui és qui al bosc",
    descripció:
      "Joc per fer al bosc i descobrir els 10 arbres principals. Cal una breu preparació, on l’educador ha de dissenyar un seguit de preguntes amb resposta Sí/No que permetin al participant descobrir els diferents arbres.",
    participants: "Fins 50, subgrups de 5/10",
    edats: "4-18 anys",
    edatmin: 4,
    edatmax: 18,
    participantsmin: 10,
    participantsmax: 50,
    espai: "Exterior",
    durada: "2h",
    objectius: (
      <div>
        <ul>
          <li>· Conèixer 10 arbres diferents d’un lloc determinat. </li>
          <li>
            · Familiaritzar-se amb les parts de l’arbre, les fulles, els tipus
            d’arbres que hi ha, els boscos que formen.
          </li>
          <li>
            · Utilitzar correctament guies i claus de determinació. A partir de
            respondre preguntes senzilles, arribar a descobrir quin és l’arbre
            que tenim davant.
          </li>
        </ul>
      </div>
    ),
    material: `Guia de preguntes, números indicadors, full de joc, si els participants són de menys de 10 anys, es poden facilitar dibuixos o imatges de les fulles`,
    introducció: `Per iniciar el joc, s’explica al grup l’objectiu principal, que és reconèixer 10 arbres del bosc. El joc pot ser competitiu si es vol.`,
    desenvolupament: `El monitor ha de preparar un seguit de preguntes senzilles per parelles amb resposta única de sí o no, que et condueixen a la següent pregunta. A partir de les respostes, s’arriben a indicar les solucions. Per fer aquest joc cal saber característiques importants de l’arbre (les formes de la fulla, els marges que tenen, si tenen espines, els fruits, les flors, l’escorça, etc.) i els elements que els diferencien.

        Preguntes que es poden fer:
        
        L’arbre fa més de 8 metres → Sí → Anar al 2
        L’arbre fa més de 8 metres → No → Anar al 3 Fulles en forma d’agulla → Sí → Pi Blanc
        Fulles en forma d’agulla → No → Aneu al 4
        3. Fulles dures i sempre verdes → Sí → Alzina
        3. Fulles dures i sempre verdes → No → Aneu al 5
        Ja hem descobert dos arbres. I així, podem anar construint preguntes i respostes que permetin descobrir fins a 10 arbres. Cada grup té un full de ruta amb el número de l’arbre a descobrir, on apuntar-ne el nom. Cada arbre ha de dur penjat un número que l’identifiqui. Si hi juguen els pares o participants a partir de 12 anys, es pot utilitzar una guia comercial o clau dicotòmica.`,
    avaluació: `Per saber com ha anat l’activitat, cal comprovar els fulls de ruta i veure quins arbres han descobert, repassar-ne les característiques, quin ha estat el més difícil, quin és el que més ha agradat, quin ja coneixien abans, quin han vist per primer cop, etc.

        Guies que poden ajudar a fer aquesta activitat:
        
        Quadern verd. Departament d’Educació Ambiental de la Fundació Pere Tarrés.
        Guia per a conèixer els arbres. Francesc Masclans. Ed. Flor del vent.
        Guia dels arbres dels Països Catalans. Ramon Pascual. Ed Pòrtic.`,
    etiquetes: ["Cooperatiu", "Exterior"],
    isFavorite: false,
  },
  {
    id: 46,
    title: "Quadrats cooperatius ",
    descripció:
      "L’activitat proposada és un joc dirigit on es pretén que els joves experimentin diferents fases en un procés de resolució (competitivitat, frustració, col·laboració i cooperació)",
    participants: "Máx 30",
    edats: "16-18 anys",
    edatmin: 16,
    edatmax: 18,
    participantsmin: 1,
    participantsmax: 30,
    espai: "Exterior/Interior",
    durada: "1h",
    objectius: (
      <div>
        <ul>
          <li>· Desenvolupar la competència de regulació emocional. </li>
          <li>· Reflexionar sobre les respostes davant dels conflictes.</li>
          <li>
            · Adquirir habilitats d’enfrontament a situacions de frustració.
          </li>
          <li>· Valorar la cooperació.</li>
        </ul>
      </div>
    ),
    material: `4 sobres amb 8 fitxes geomètriques que configuren un quadrat (1 de cada color). 1 model de quadre, i si es possible una pissarra`,
    introducció: `S’organitzen quatre grups. A cadascun se’ls facilita un sobre que conté vuit peces de colors diferents. L’objectiu és aconseguir un sol quadrat utilitzant totes les peces. Les normes són:
        1. No es pot parlar en cap moment. No s’admeten preguntes.
        2. A la senyal, hauran d’obrir els sobres i utilitzar totes les peces per assolir l’objectiu.
        
        Per fer que els joves visquin les fases proposades cal:
        
        • Abans de l’explicació situar els quatre grups ben apartats els uns dels altres.
        • L’inici de la dinàmica es realitzarà amb un crit fort de “JA”.
        • Cap dels sobres disposarà de les peces necessàries.
        • Un cop explicada la dinàmica l’educador/a deixarà a la pissarra un model resolt.
        • Si s’escau, es facilitaran pistes amb la intenció que comprenguin que s’han d’aixecar i intercanviar peces entre grups.
        • Quan han acabat els quatre grups es tornen a revisar les normes i s’emfatitza l’objectiu d’un sol quadrat.`,
    desenvolupament: `Un cop explicat el joc, el monitor o monitora observarà el desenvolupament de l’activitat. Possibles pautes d’observació:

        • Com reaccionen quan es crida “JA!”?
        • Algú se n’adona de la pista?
        • Quines reaccions tenen davant la frustració?
        • Com gestionen l’intercanvi de fitxes entre grups?
        • Els grups que acaben el seu quadrat què fan?`,
    avaluació: `És important crear un espai d’intercanvi comentant els aspectes destacats que s’han recollit i relacionar-ho amb les reaccions que tenen davant dels conflictes quotidians.`,
    etiquetes: ["Cooperatiu", "Exterior", "Interior"],
    isFavorite: false,
  },
  {
    id: 47,
    title: "Korfball ",
    descripció:
      "Descobrim una modalitat esportiva que prové dels Països Baixos i que fomenta la cooperació.",
    participants: "2 equips(8/8)",
    edats: "9-18 anys",
    espai: "Exterior/Interior",
    edatmin: 9,
    edatmax: 18,
    participantsmin: 16,
    participantsmax: 16,
    durada: "30mins-1h",
    objectius: (
      <div>
        <ul>
          <li>
            · Aprendre els aspectes bàsics del korfball (tàctica, tècnica i
            reglament).{" "}
          </li>
          <li>
            · Desenvolupar les habilitats motrius específiques de l’esport.
          </li>
          <li>
            · Aplicar els valors de cooperació, competició i respecte propis de
            l’esport.
          </li>
        </ul>
      </div>
    ),
    material: `A més de les cistelles, caldrà una pilota com les de futbol, del número 5, amb un pes d’entre 425 i 475 gr.`,
    introducció: `El korfball és l’única modalitat esportiva que està reglamentada a nivell internacional amb grups mixtes. El korfball obliga a cooperar i exclou l’individualisme. Destaca que és un joc de pilota practicat amb les mans i la seva finalitat és introduir la pilota en una cistella sense fons. S’evita l’especialització tant en defensa com en atac. Tot i ser un esport molt ràpid i dinàmic no es permet el contacte físic, cosa que redueix les possibilitats de lesions i/o conflictes. Actualment, hi ha molts clubs a nivell internacional. A Catalunya hi ha una federació i una selecció catalana.`,
    desenvolupament: `Les regles principals són: 

        a. No es permet:
        • Tocar la pilota amb la cama o el peu, amb el puny o des del terra.
        • Córrer amb la pilota. Quan un té la pilota es quedarà parat.
        • Per tirar a cistella no es pot tenir cap peu tocant al terra.
         
        
        b. Sí que podem: 
        
        • Donar les passes necessàries per parar quan es rep la pilota corrent.
        • Jugar amb la pilota sense parar després de rebre-la corrent o saltant.
        • Pivotar sobre un peu.
        • Jugar d’una forma individual amb autopassades o regatejant.
        • Prendre la pilota de les mans d’un altre jugador/a.
        • Defensar contra un contrari del sexe oposat.
        • Defensar contra un contrari que ja està sent objecte d’una defensa per un/a company/a.
        • Jugar fora del quadre que ens correspon.
        • Tirar a cistella en posició de defensa, des del quadre de defensa o quan un defensor/a que et marca està en una de las següents condicions: ha d’estar a una distància d’un braç; ha d’intentar impedir el tir a cistella. Un tir es considera "defensat" quan compleixi una d’aquestes condicions: estar a una distància d’un braç, quan s’impedeix el tir a cistella i s’està més prop de la cistella que el jugador atacant.
        • Influir en un llançament a cistella movent el pal.
        • Retenir la pilota més de 4 segons.`,
    avaluació: `Mitjançant aquesta activitat els infants podran gaudir i aprendre descobrint un esport poc conegut al nostre país però del qual tenim una selecció nacional.

        El terreny de joc és un rectangle de 40 per 20 metres. Es divideix en dues parts iguals A i B que corren paral·leles a l’amplada del mateix. Els pals s’aixecaran a les divisions A i B, als eixos longitudinals del camp, a una distància dels extrems igual a un terç d’un quadrat. A cada pal es fixarà una cistella. Aquesta haurà d’estar situada a la divisió central i a la vora del mateix, a una alçada de 3,50 metres.`,
    etiquetes: ["Cooperatiu", "Exterior", "Interior"],
    isFavorite: false,
  },
  {
    id: 48,
    title: "Per aconseguir els papers necessito... ",
    descripció:
      "Experimentar la desesperant situació i la magnitud de papers i burocràcia que ha de fer una persona immigrant quan vol aconseguir la ciutadania del nostre país.",
    participants: "Tants com vulguis",
    edats: "12-18 anys",
    edatmin: 12,
    edatmax: 18,
    participantsmin: 1,
    participantsmax: 30,
    espai: "Exterior",
    durada: "30mins-1h",
    objectius: (
      <div>
        <ul>
          <li>· Conèixer les dificultats d'un immigrant. </li>
          <li>· Aproximar els infants a la burocràcia.</li>
          <li>· Fomentar el treball en equip.</li>
        </ul>
      </div>
    ),
    material: `Fulls de colors, cartolines, retoladors`,
    introducció: `Actualment tots hem de fer grans esforços burocràtics per aconseguir beques, títols, subvencions, entre d'altres. Però els immigrants tenen dificultats molt més grans que les nostres. En som conscients de fins a quin punt pot ser complicat per a una persona que va néixer uns quilometres més lluny de casa nostra?`,
    desenvolupament: `Crearem deu grups de joves o infants i els repartirem un paper de color blau a cadascú on hi posarà “butlletí de color verd” i un espai on posar-hi una firma. Els direm que han d'aconseguir el paper que posi: “Ja ets ciutadà”. Els monitors ens amagarem pel terreny amb cartells que posi: “Secretaria número...” amb el número que ens hagi tocat de l'1 al 10. Cada monitor serà l'encarregat d'agafar un color de butlletí específic i donar-ne un d'un color diferent. És una cadena de colors, per aconseguir el groc, primer necessiten el vermell, per al vermell necessiten el verd, el blau, etc.

        Els butlletins han d'estar firmats per la secretaria que vulgui cada monitor i també pot avaluar-los com ell vulgui; és a dir, tan pot demanar els butlletins del paper blau com els que posa “butlletí blau” i són d'un altre color. Els monitors podran demanar el què vulguin, firmat dues vegades, una, etc. depenent de com vegin que avança el joc. Si els hi entreguen el butlletí que pertoca el monitor els donarà un altre d'un color diferent que podran portar a una altra secretaria.
        
        La secretaria més exigent els demana 5 grocs i 5 vermells. Per aconseguir-los, s'adonaran que han d'unir tots els butlletins i anar tots els grups junts.`,
    avaluació: `Asseguts en rotllana han de compartir com s'han sentit havent d'anar a tantes secretaries diferents, si els ha posat molt nerviosos, si els ha portat mals de caps, etc. Finalment, transportarem la situació als immigrants per fer un exercici d'empatia i comprensió.`,
    etiquetes: ["Cooperatiu", "Exterior"],
    isFavorite: false,
  },
  {
    id: 49,
    title: "Escapa... si pots!",
    descripció: "Joc de pistes basat en l'experiència del room escape",
    participants: "Grups de 4-5",
    edats: "12-18 anys",
    edatmin: 12,
    edatmax: 18,
    participantsmin: 5,
    participantsmax: 30,
    espai: "Interior(2-3 sales)",
    durada: "30 o 60 mins",
    objectius: (
      <div>
        <ul>
          <li>· Aconseguir sortir de l’edifici en el temps marcat.</li>
          <li>· Treballar en equip per a aconseguir l’objectiu.</li>
          <li>
            · Utilitzar el nostre sentit de la curiositat, observació i
            deducció.
          </li>
        </ul>
      </div>
    ),
    material: `Pistes, codis, decoració de les sales`,
    introducció: `Aquesta dinàmica és un joc de pistes que es basa en l’experiència de diversos locals de la ciutat de Barcelona que han engegat un projecte lúdic basat en un ‘joc d’escapament’ o room scape. La primera empresa a posar-ho en pràctica va ser Parapark, al barri de Sants.`,
    desenvolupament: `El funcionament del joc de pistes és particular i molt senzill. Els infants accediran a un espai tancat dins del recinte de l’esplai, per exemple 2 o 3 sales, en funció de la quantitat de pistes preparades per l’equip de monitors. Esbrinant les pistes o codis, els infants o joves diposaran d’un temps límit de 30 o 60 minuts, depenent de les proves previstes, per sortir de l’edifici. En cas contrari no hauran superat el joc. 

        A continuació us donem alguns elements que podeu utilitzar per a crear les pistes que facilitin la sortida:
        
        Una història o centre d’interès per fer el joc més atractiu.
        Codis numèrics que obrin alguna caixa tancada amb cadenat.
        Contrassenyes per obrir algun arxiu de l’ordinador.
        Pistes que portin a aquests codis.
        Claus amagades que obrin alguna porta de sortida.
        Vídeos amb personatges que ens ajudin amb alguna pista.
        Un contacte constant amb l’exterior (monitors) que ens pugui ajudar en cas que ens quedem bloquejats en alguna pista (per exemple, via Whatsapp o telèfon).`,
    avaluació: `El joc té alguns components interessants per a treballar el grup, com són la necessitat del treball en equip per aconseguir avançar amb les pistes i assolir l’objectiu final (sortir de l’edifici).`,
    etiquetes: ["Cooperatiu", "Jocs de pistes i gimcanes", "Interior"],
    isFavorite: false,
  },
  {
    id: 50,
    title: "Els veïns",
    descripció:
      "Joc de rotllana on un jugador no té lloc per seure, i haurà de mirar d’aconseguir-lo incitant els altres jugadors a moure’s.",
    participants: "10+",
    edats: "9-11 anys",
    edatmin: 9,
    edatmax: 11,
    participantsmin: 10,
    participantsmax: 50,
    espai: "Interior/Exterior",
    durada: "10mins",
    objectiusMoni: (
      <div>
        <ul>
          <li>· Conèixer el grup, cohesionar el grup.</li>
        </ul>
      </div>
    ),
    objectiusInf: (
      <div>
        <ul>
          <li>
            · Conèixer els companys/es, moure’s amb destresa, passar una bona
            estona.
          </li>
        </ul>
      </div>
    ),
    material: `Sense material`,
    introducció: `Tots els jugadors menys un s’asseuen formant una rotllana.`,
    desenvolupament: `El jugador que està dret al mig escull un jugador qualsevol dels que estan asseguts i li pregunta: “T’agraden els teus veïns?”. Si la resposta és sí, haurà de buscar un altre jugador i tornar-li a fer la pregunta. Si la resposta és no, farà una segona pregunta: “I qui vols per veí?”.

        En aquest moment haurà de respondre amb el nom de dos jugadors, els quals s’hauran d’aixecar i canviar de lloc, igual que les persones que estan assegudes a banda i banda del jugador que ha contestat, quedant quatre llocs lliures i cinc jugadors que se’ls disputen (el jugador que està al mig també té com a objectiu trobar lloc per seure).
        
        L’única condició és no tornar a seure al lloc que s’ocupava prèviament. El jugador que no pot seure (o és l’últim en fer-ho) es quedarà dret al mig de la rotllana. El joc transcorre d’aquesta manera amb una variant a la resposta de la segona pregunta. Enlloc del nom de dos jugadors es pot respondre “rebombori general”, i en aquest cas tots els jugadors han d’aixecar-se i canviar de lloc, l’últim a seure haurà de quedar-se dret i fer les preguntes.`,
    avaluació: `En funció del grup o dels objectius de l’equip de monitors, es poden afegir condicionants a la segona pregunta (p.ex. un noi i una noia, més gran i més jove, membres de diferents grups, o donar com a resposta una condició que pot complir més d’un jugador com per exemple algú que toqui la guitarra i algú que tingui els ulls verds, etc.).`,
    etiquetes: [
      "Cooperatiu",
      "Exterior",
      "Interior",
      "Jocs curts",
      "Sense material",
    ],
    isFavorite: false,
  },
  {
    id: 51,
    title: "El poder a escena",
    descripció:
      "Dinàmica teatral en què els joves hauran de representar escenes en què s'estableix una relació de poder.",
    participants: "2-20",
    participantsmin: 2,
    participantsmax: 20,
    edats: "16-18 anys",
    edatmin: 16,
    edatmax: 18,
    espai: "Interior",
    durada: "30mins",
    duradamin: 30,
    objectiusMoni: (
      <div>
        <ul>
          <li>· Orientar una reflexió sobre les relacions de poder. </li>
        </ul>
      </div>
    ),
    objectiusInf: (
      <div>
        <ul>
          <li>· Expressar-se corporalment.</li>
          <li>· Millorar la capacitat d'empatia.</li>
        </ul>
      </div>
    ),
    material: `Sense material`,
    introducció: `Aquesta dinàmica teatral és idònia per a fer amb el grup de joves. Seria convenient fer-la dintre d'una dinàmica més àmplia d'activitats teatrals, en la qual s'hagin fet exercicis d'escalfament. Agrupem els participants per parelles, i els demanem que pensin una situació breu per a representar en la qual intervinguin dos personatges; s'haurà de veure clarament com un d'ells té una posició de poder respecte l'altre. Aquesta jerarquia no s'haurà d'explicar, sinó que hauria d'estar implícita en l'escena representada.`,
    desenvolupament: `Quan tots els grups tinguin la seva escena pensada i assajada, es començaran a representar davant de la resta de companys, els quals hauran d'endevinar de quins personatges es tracta i de quina relació de poder hi ha en l'acció. L'equip de monitors/es pot fer algun comentari sobre la manera de representar-la si és convenient. Un exemple pot ser un coronel que ordena a un soldat que dispari, un professor que dóna deures a una alumna o una cap donant instruccions a un empleat. Es poden introduir variacions, com per exemple repetir les escenes sense parlar, per tal d'insistir en la gestualitat, o fer-los repetir l'escena parlant amb emocions diferents, com la tristesa, l'alegria o la por.`,
    avaluació: `En acabar es fa una reflexió amb el grup sobre com s'han sentit i quin paper juguen les relacions de poder en la nostra vida quotidiana.`,
    etiquetes: ["Cooperatiu", "Interior", "Sense material"],
    isFavorite: false,
  },
  {
    id: 52,
    title: "Fem barrets",
    descripció: "Taller de realització de barrets de paper.",
    participants: "Indiferent",
    participantsmin: 1,
    participantsmax: 50,
    edats: "9-11 anys",
    edatmin: 9,
    edatmax: 11,
    espai: "Interior",
    durada: "20mins",
    duradamin: 20,
    objectiusMoni: (
      <div>
        <ul>
          <li>
            · Utilitzar el paper com a recurs de vestuari en les activitats de
            lleure.{" "}
          </li>
          <li>
            · Treballar el vestuari com un element primordial en l'ambientació
            de les activitats.
          </li>
        </ul>
      </div>
    ),
    objectiusInf: (
      <div>
        <ul>
          <li>· Treballar la psicomotricitat fina i la destresa manual.</li>
          <li>· Potenciar la imaginació i la creativitat.</li>
        </ul>
      </div>
    ),
    material: `Cartolina, paper de pinotxo, paper de seda, grapadora, grapes, cinta adhesiva`,
    introducció: `Proposem realitzar un taller en el qual podem fer gairebé qualsevol tipus de barret, casc o gorra, ajustats a la mida de cada participant. Només cal que ens adaptem a l'edat del grup d'infants i decidim si realitzem un únic model per a tot el grup o deixem que cadascú projecti i realitzi el seu propi barret.`,
    desenvolupament: `1. Prendrem la mesura del cap de cada infant amb una tira de cartolina que tancarem amb una grapa i acabarem de fer un casquet amb tres tires més. Grapades a la primera. 

        2. En el cas que vulguem fer un barret amb ala, ara caldria calcar el perímetre del casquet sobre una cartolina, dibuixar el perfil exterior de l'ala i construir les pestanyes interiors que subjectin el casquet a l'ala. 
        
        3. Quan ja tenim l'estructura del barret, casc o gorra, només hem d'afegir-hi els elements que cobreixen el cap, amb paper de pinotxo i cinta adhesiva i acabar-lo amb les decoracions que més ens agradin: paper de pinotxo o de seda de colors, cordill, etc.`,
    avaluació: `Aquest taller pot servir per fomentar l'originalitat en els processos creatius. Cal veure si la tècnica ha estat l'adient i si al final del procés el barret està ben construït. També pot ajudar a treballar aspectes quotidians com el respecte pels materials, els espais i l'organització entre el grup d'iguals.`,
    etiquetes: ["Cooperatiu", "Interior"],
    isFavorite: false,
  },
  {
    id: 53,
    title: "Juguem amb les lletres",
    descripció:
      "Dinàmica per a treballar la cooperació per a assolir un objectiu comú.",
    participants: "10-20",
    participantsmin: 10,
    participantsmax: 20,
    edats: "9-11 anys",
    edatmin: 9,
    edatmax: 11,
    espai: "Interior",
    durada: "30-45mins",
    duradamin: 20,
    duradamax: 45,
    objectiusMoni: (
      <div>
        <ul>
          <li>· Treballar la resolució de conflictes en grups petits. </li>
          <li>· Potenciar la interacció social per a trobar una solució.</li>
        </ul>
      </div>
    ),
    objectiusInf: (
      <div>
        <ul>
          <li>· Escoltar activament les propostes dels companys.</li>
          <li>
            · Expressar-se davant dels altres de manera oberta i sense por a
            equivocar-se.
          </li>
          <li>
            · Col·laborar conjuntament a l'hora de portar a terme una tasca.
          </li>
        </ul>
      </div>
    ),
    material: `Llapis,paper i goma per a cadad parella, un diccionari per grup`,
    introducció: `Aquest és un joc per a treballar l'agilitat mental i la cooperació per parelles per a trobar diferents paraules combinant les mateixes lletres. És un joc perfecte per fer un dia de pluja en un espai reduït.`,
    desenvolupament: `Demanarem als infants que es posin per parelles i cada parella haurà de tenir un full de paper, un llapis i una goma d'esborrar.

        A una pissarra o cartolina gran escriurem una paraula i els direm als infants que l'objectiu del joc és el següent: han de trobar el màxim de paraules possibles –que apareguin al diccionari– que es puguin construir combinant les diferents lletres que formen la paraula que hem escrit nosaltres. La consigna que ha de quedar ben clara és que ho han de fer plegats; els dos membres de la parella. Les paraules que formin han de tenir un mínim de quatre lletres.
        
        Per a cada paraula que juguem els haurem de deixar uns 10-15 minuts per a pensar les paraules que hauran de trobar. El temps que els deixarem dependrà de l'edat dels infants i de les característiques de grup.
        
        Un exemple podria ser que nosaltres apuntem: ENCANTADORA i els infants poden trobar paraules com cantar, cent, nota, conte...
        
        Podem fer més d'una partida i anar sumant punts i fer que guanyi qui té més punts o que la parella que troba més paraules és la que després escriu la paraula amb la qual jugarem.
        
        Al final de cada paraula podem fer una posada comú i una altra al final del joc.`,
    avaluació: `Podem proposar tantes paraules com ganes de jugar tinguin els nens i nenes.
        Al final del joc, podem preguntar als infants com s'han sentit i què els ha semblat més difícil.
        Podem analitzar amb els infants els pensaments i sentiments viscuts: cooperació, conflicte, acord, subordinació...
        Al final podem fer una anàlisi per a valorar els obstacles i la riquesa de la cooperació.`,
    etiquetes: ["Cooperatiu", "Interior", "Jocs curts"],
    isFavorite: false,
  },
  {
    id: 54,
    title: "Música sí-no",
    descripció:
      "Posarem diferents cançons, moltes i diverses. La idea és que les persones es posicionin en un banda o en una altra en funció de si els hi agrada o no la cançó música que estan escoltant en aquell moment.",
    participants: "10-40",
    participantsmin: 10,
    participantsmax: 40,
    edats: "9-15 anys",
    edatmin: 9,
    edatmax: 15,
    espai: "Interior",
    durada: "10-20mins",
    duradamin: 10,
    duradamax: 20,
    objectiusMoni: (
      <div>
        <ul>
          <li>· Conèixer el grup de joves. </li>
        </ul>
      </div>
    ),
    objectiusInf: (
      <div>
        <ul>
          <li>· Conèixer els companys.</li>
          <li>· Trobar punts en comú.</li>
          <li>· Trencar estereotips.</li>
        </ul>
      </div>
    ),
    material: `Reproductors de música, un llistat de reproducció`,
    introducció: `Per començar la dinàmica es posaran tots els participants de peu. Els hi explicarem que posarem música i que hauran de posicionar-se: si els hi agrada el que escolten es mouran a la dreta i si no els hi agrada cap a l'esquerra. No ens podem quedar al mig, ens hem de posicionar.`,
    desenvolupament: `El procés és anar posant diferents cançons, però hi ha algunes coses que hauríem de tenir presents durant la dinàmica:

        Posar la música de manera que ells no vegin quina cançó és abans de que comenci a sonar (per a que no es vegin condicionats).
        Fer una selecció de cançons tenint en compte que a tots els joves els n'agradi alguna.
        Posar cançons que no coneguin, en diferents idiomes i de diferents estils.
        La idea és posar els primers 50-60 segons de cada cançó. Com a dinamitzadors hem de veure que tothom pugui passar tant pel sí com pel no. Si creiem que el grup condicionarà les decisions, podem demanar que ho facin amb els ulls tapats i quan tothom estigui posicionat que mirin qui hi ha al seu costat.`,
    avaluació: `Al final de la dinàmica, podem fer la reflexió de que tots i totes hem estat en el sí i en el no, hem coincidit amb persones diferents i que tot i ser diferents tenim punts en comú. Podem preguntar:

        Què us ha sorprès?
        Amb qui heu estat més vegades junts?
        Què heu trobat a faltar? (així també descobrirem més gustos dels joves)`,
    etiquetes: ["Cooperatiu", "Interior", "Jocs curts", "Narració i expressió"],
    isFavorite: false,
  },
  {
    id: 55,
    title: "Ens ordenem...",
    descripció: `Dinàmica on es busca la interacció entre els membres del grup, que es barregin, a partir de les instruccions donades tot acabant en una disposició aleatòria.`,
    participants: "10+",
    participantsmin: 10,
    participantsmax: 50,
    edats: "9-15 anys",
    edatmin: 9,
    edatmax: 15,
    espai: "Interior/Exterior",
    durada: "2mins",
    duradamin: 2,
    objectiusMoni: (
      <div>
        <ul>
          <li>
            · Conèixer el grup o fer grups per a una activitat posterior.{" "}
          </li>
        </ul>
      </div>
    ),
    objectiusInf: (
      <div>
        <ul>
          <li>· Conèixer alguna curiositat dels companys/es.</li>
          <li>· Passar una bona estona.</li>
        </ul>
      </div>
    ),
    material: `Sense material`,
    introducció: `Tots els participants s'han de col·locar seguint una línia recta. El criteri per ordenar-se el dóna el conductor de l'activitat.`,
    desenvolupament: `Per exemple, ordenar-se en funció de la data de naixement (dia i mes, millor no tenir en compte l'any per que la disposició dels participants sigui més aleatòria). També els podem ordenar en funció de diferents qüestions, això sí, han de ser quantificables, com el nombre de germans que tenen, quan temps fa que estan a l'esplai, el nombre de lletres de la paraula més llarga que els vingui al cap, etc.

        Després d'un o dos criteris per ordenar-se, com a molt tres, tenim al grup disposat d'una manera aleatòria, per tal de començar una nova activitat.
        
        Haver barrejat al grup ens pot convenir de cara a una activitat de coneixença, de reflexió, per fer equips o grups de treball, etc.`,
    avaluació: `És important no fer-se pesat amb aquesta dinàmica, val més una bona pregunta que no allargar-ho com si fos un joc. La fila índia és una posició una mica incòmoda pel grup, no permet la interacció entre els diferents membres i abusar-ne pot portar a situacions en que els participants desconnectin pel fet de no entendre el que s'està fent.`,
    etiquetes: ["Cooperatiu", "Interior", "Jocs curts", "Sense material"],
    isFavorite: false,
  },
  {
    id: 56,
    title: "Passa'm el joc!",
    descripció: `Aquesta és una dinàmica que pretén portar el joc a una nova dimensió i fer descobrir als participants les possibilitats de poder idear jocs i activitats sense necessitat d’excessius béns materials. Està pensada sobretot per a grups de joves o, fins i tot, de monitors i monitores.`,
    participants: "2+",
    participantsmin: 2,
    participantsmax: 50,
    edats: "12-18 anys",
    edatmin: 12,
    edatmax: 18,
    espai: "Interior/Exterior",
    durada: "15mins",
    duradamin: 15,
    objectiusMoni: (
      <div>
        <ul>
          <li>· Educar en l’austeritat </li>
        </ul>
      </div>
    ),
    objectiusInf: (
      <div>
        <ul>
          <li>· Educar en l’austeritat</li>
          <li>· Treballar en grup</li>
          <li>· Expressar idees verbalment</li>
        </ul>
      </div>
    ),
    material: `Un parell d’objectes del quotidià no relacionats amb cap joc (per exemple: una cantimplora, un paquet de mocadors, un clip, un llapis…). És aconsellable evitar les pilotes.`,
    introducció: `Des d’un inici, a l’espai hi ha un seguit d’objectes del quotidià. Tant hi fa la quantitat, però com menys millor. `,
    desenvolupament: `Els participants es col·loquen per parelles o grupets i ordenadament s’acosten als objectes. Amb cinc minuts com a màxim han de pensar un joc breu per la resta de participants que inclogui els objectes que tenen. La gràcia és pensar jocs originals, adaptant jocs coneguts o inventant normes noves. Un cop el tenen, l’expliquen a la resta. Tot seguit l’apliquen tots. A continuació, una altra parella o grupet s’encarrega d’idear un altre joc diferent, que al seu temps explicaran als altres i el jugaran tots junts.`,
    avaluació: `Sempre que sigui possible, és interessant la figura d’un “secretari” que anoti els diferents jocs que van sorgint dels objectes, per recollir i fer tangible la gran quantitat d’opcions que entre tots som capaços de pensar. És una dinàmica útil per fer una mena de brainstorming (pluja d’idees), que ajuda a generar moltes idees i crea un ambient innovador i creatiu.`,
    etiquetes: ["Cooperatiu", "Interior", "Exterior", "Jocs curts"],
    isFavorite: false,
  },
  {
    id: 57,
    title: "Innovem amb una 'PRA' col·lectiva ",
    descripció: `Entre diversos equips es plantejaran diferents activitats d’esplai, cadascú aportant el seu granet de sorra.`,
    participants: "Múltiples de 5",
    participantsmin: 5,
    participantsmax: 50,
    edats: "Monitors",
    edatmin: 18,
    edatmax: 18,
    espai: "Interior/Exterior",
    durada: "45-60mins",
    duradamin: 45,
    duradamax: 60,
    objectius: (
      <div>
        <ul>
          <li>· Difondre la tasca del monitoratge. </li>
          <li>· Generar activitats de forma coolaborativa i cooperativa.</li>
        </ul>
      </div>
    ),
    material: `Cinc fitxes de PRA buides, bolígrafs o material per escriure`,
    introducció: `La PRA col·lectiva és una dinàmica que dóna un gir innovador a les preparacions d’activitats. És per això que està enfocada a monitors i monitores especialment. En el millor dels casos, també es pot utilitzar amb joves o futurs monitors per introduir-los en el món de l’esplai. `,
    desenvolupament: `Els participants es disposen per petits grups formant una rotllana. Cada grup té davant seu una fitxa de Preparació, Realització i Avaluació (PRA) en blanc. Per començar, cada grup ha de proposar un seguit d’objectius pedagògics a assolir en la seva respectiva fitxa. Aquests poden ser hipotètics o reals de cada esplai en concret. Un cop hi han escrit tots els membres d’un grup, la fitxa passa al grup de la dreta que, observant els objectius que hi ha a la fitxa que els acaba d’arribar, es plantegen una ambientació. Tot seguit, passen la fitxa altre cop cap a la dreta. Ara, els toca plantejar quin format d’activitat faran (joc de pistes, gimcana, reflexió…). I després la fitxa passa al següent grup, que idearà l’activitat en sí. Després, la fitxa arriba a l’últim grup, que s’encarrega de revisar-la i fer un recull de material i notes a tenir en compte. Finalment, cada fitxa retorna al grup inicial, que comprovarà que sigui una bona activitat per assolir els objectius plantejats.`,
    avaluació: `D’aquesta manera, es generen activitats de manera transversal i grupal, tenint en compte diferents requisits i acollint tots els punts de vista.`,
    etiquetes: ["Cooperatiu", "Interior", "Exterior"],
    isFavorite: false,
  },
  {
    id: 58,
    title: "Joc de lots",
    descripció: `Joc de nit que combina el camuflatge i l'enginy per passar d'un costat a l'altre del camp sense ser descobert.`,
    participants: "12-20",
    participantsmin: 12,
    participantsmax: 20,
    edats: "4-18",
    edatmin: 4,
    edatmax: 18,
    espai: "Exterior",
    durada: "30mins",
    duradamin: 45,
    duradamax: 60,
    objectiusMoni: (
      <div>
        <ul>
          <li>· Evitar que s’estableixin rols de lideratge molt marcat. </li>
          <li>· Potenciar el treball en equip entre els participants.</li>
        </ul>
      </div>
    ),
    objectiusInf: (
      <div>
        <ul>
          <li>· Saber perdre i guanyar. </li>
          <li>
            · Tenir recursos per tolerar la frustració quan no es compleixen les
            pròpies expectatives.{" "}
          </li>
        </ul>
      </div>
    ),
    material: `Una lot per cada infant que participa.`,
    introducció: `S'explica l'activitat al grup d'infants i s'avisa el començament del joc.`,
    desenvolupament: `Es tria un grup d’infants o joves perquè parin. Se situen estratègicament per tot el terreny de joc, asseguts al terra, sense poder moure’s i amb una lot per cap. La resta se situa en un extrem del camp. Quan es fa sonar un xiulet (1 vegada) les lots s’apaguen i els infants i joves comencen a córrer en direcció a l’altre extrem del camp. Passats uns segons, es xiula de nou (2 vegades). Llavors, els infants han d’aturar-se i la resta encendre les lots per intentar reconèixer el màxim nombre de participants. Qui és reconegut, ha de tornar enrere i tornar a començar. I així successivament. 
        

        Variant: Està permès l’intercanvi de roba, anar completament tapat, etc.`,
    avaluació: `Durant el joc podem observar com els infants es relacionen entre ells.
        Podem observar com gestionen el fet de ser descoberts.
        Si s’ha aconseguit un espai pla, llis i reconegut per facilitar la participació de discapacitats.`,
    etiquetes: ["Cooperatiu", "Exterior", "Jocs de nit"],
    isFavorite: false,
  },
  {
    id: 59,
    title: "Goalball, juguem?",
    descripció: `El Goalball és l’únic esport paralímpic creat específicament per a persones cegues o amb deficiència visual.`,
    participants: "Mín 6(3/3)",
    participantsmin: 6,
    participantsmax: 20,
    edats: "12-18",
    edatmin: 12,
    edatmax: 18,
    espai: "Exterior",
    durada: "15mins",
    duradamin: 15,
    objectius: (
      <div>
        <ul>
          <li>
            · Viure en primera persona les dificultats d’una persona cega i/o
            amb deficiència visual.{" "}
          </li>
          <li>· Fer consciència social a partir de l’esport i el lleure.</li>
          <li>· Treballar la capacitat espaial.</li>
          <li>· Potenciar el desenvolupament del sentit auditiu.</li>
          <li>· Fer silenci.</li>
        </ul>
      </div>
    ),
    material: `Pilota de GOALBALL (pilota amb cascabells a l’interior, es pot construir).
        Cinta americana o esparadrap.
        Quelcom per tapar els ulls (mocadors, antifaços, ulleres de piscina tapades, etc.).`,
    introducció: `Aquesta proposta pretén fer conèixer i practicar un esport molt poc conegut com és el Goalball, però sobretot el que intenta és anar més enllà i destinar una tarda d’esplai perquè els infants coneguin de prop la realitat d’una persona cega o amb deficiència visual.

        Sempre que vulguem fer iniciació esportiva, i més encara quan l’esport sigui poc conegut, el procés de familiarització és la part més important per optar a l’èxit de la pràctica esportiva.`,
    desenvolupament: `Seria ideal fer alguns exercicis previs on no es podrà fer servir la vista que tinguin un increment del grau de dificultat, per tal de treballar el procés de familiarització i sentir-se còmode amb aquesta peculiar situació.

        Per començar el partit es delimitarà el terreny de joc amb la cinta de tal manera que es pugui fer servir el tacte per situar-se. A més farem servir les línies del fons com a porteries i s’organitzaran dos equips de 3 jugadors. Serà necessària la presència d’un àrbitre, que serà l’únic que hi podrà veure. Els participants hauran d’estirar-se al terra de costat mirant la porteria contrària i ocupant l’espai suficient per poder tapar tota la seva porteria.
        
        Fent servir les mans i els peus podran llançar la pilota, que sempre lliscarà pel terra, amb la intenció de marcar gol. Es penalitzarà qualsevol soroll que pugui realitzar un participant, ja que serà necessari el màxim silenci possible per escoltar, orientar-se i saber on és la pilota.`,
    avaluació: `La idea és que aquesta activitat no sigui només una pràctica aïllada d’aquest esport, sinó que també hi hagi tot un treball de consciència amb els infants. És interessant posar-se en contacte amb la Federació Catalana d’Esports per a Cecs. Ells ens prestaran la màxima col·laboració, i fins i tot ens enviaran alguna persona amb ceguera o deficiència visual amb una proposta d’activitats per treballar tota una tarda al nostre centre.

        Ideal si és un camp o una sala rectangular, àmplia i sense obstacles (9x3 m aproximadament i res de columnes o taules). Però tot és adaptable.
        
        Més informació a www.fcecs.cat`,
    etiquetes: ["Esportiu", "Exterior"],
    isFavorite: false,
  },
  {
    id: 60,
    title: "L'ultimate",
    descripció: `Es tracta d’un esport col·lectiu en què es juga amb un disc volador. Hi competeixen dos equips que amb ràpids desmarcatges i precises passades intenten marcar el major nombre de gols a la zona d’anotació de l’equip contrari.`,
    participants: "Mín 12(6/6)",
    participantsmin: 12,
    participantsmax: 24,
    edats: "4-15",
    edatmin: 4,
    edatmax: 15,
    espai: "Exterior",
    durada: "20mins",
    duradamin: 20,
    objectiusMoni: (
      <div>
        <ul>
          <li>
            · Gaudir d’una activitat física fent un exercici de complicitat
            jugant també amb els infants.{" "}
          </li>
        </ul>
      </div>
    ),
    objectiusInf: (
      <div>
        <ul>
          <li>
            · Gaudir d’una activitat esportiva sense contacte i autoregulada per
            ells mateixos.{" "}
          </li>
        </ul>
      </div>
    ),
    material: `Frisbee de 165grams`,
    introducció: `És un esport col·lectiu que es juga amb un disc volador o “frisbee”. Les regles del joc estan fonamentades en l’autoarbitratge i la no violència, ja que no hi ha d’haver contacte físic entre els jugadors.

        Té similituds amb el rugbi per la rapidesa de desplaçaments i les zones d’assaig i, d’altra banda, també amb el bàsquet per poder pivotar sobre un peu.`,
    desenvolupament: `Juguen dos equips de sis jugadors. L’equip que té el disc és l’atacant i l’altre defensa. L’objectiu de l’atacant és avançar mitjançant passades del disc entre els seus jugadors fins aconseguir marcar un gol a la zona de l’equip contrari. L’objectiu de l’equip defensor és interferir la passada de l’equip atacant per convertir-se en equip atacant.

        Es marca un gol quan un jugador de l’equip atacant rep el disc dins de la zona d’anotació de l’altre equip, mitjançant un passada d’un membre del seu equip. Guanya l’equip que més gols aconsegueix.`,
    avaluació: `Durant el joc podem observar com els participants s'autoregulen i adapten les normes del joc. Al final del joc podem preguntar als membres dels equips si coneixien aquest joc i si en sabem d'altres jocs que també utilitzen el disc volador.`,
    etiquetes: ["Esportiu", "Exterior"],
    isFavorite: false,
  },
  {
    id: 61,
    title: "Gimcana dels ocells",
    descripció: `Joc per fer a l’aire lliure i descobrir diferents tipus d’ocells i les seves principals característiques. Cada grup haurà de superar unes proves per aconseguir una sèrie de pistes que el portaran a descobrir un ocell en concret. Cal una breu preparació, on l’educador ha de dissenyar un seguit d’explicacions de cada ocell i les proves a superar per aconseguir les pistes.`,
    participants: "-50 (Grups de 5 o 10)",
    participantsmin: 10,
    participantsmax: 50,
    edats: "4-18",
    edatmin: 4,
    edatmax: 18,
    espai: "Exterior",
    durada: "Indefinit",
    duradamin: 20,
    objectius: (
      <div>
        <ul>
          <li>
            · Conèixer alguns dels principals ocells que habiten a la zona i
            algunes de les seves característiques d’una manera dinàmica i
            divertida.
          </li>
          <li>· Potenciar el treball en grup i l’autonomia.</li>
        </ul>
      </div>
    ),
    material: `Totes les pistes escrites de cada un dels ocells, els dibuixos de les aus i els seus noms. (Tot aquest material és millor si està plastificat). 
        Un tauler gran per enganxar les pistes dels diferents grups i veure les característiques dels diferents ocells i les seves diferències. (Es pot dibuixar en una pissarra o bé en paper d’embalar, per exemple). 
        Fil i cinta adhesiva. 
        Sobres per a les pistes.`,
    introducció: `És un joc tipus gimcana amb proves de descoberta dels ocells i les seves característiques.`,
    desenvolupament: `Cada grup té assignat un ocell, però no sap quin és. Per aquesta raó haurà d’anar aconseguint una sèrie de pistes que li facilitaran característiques de l’ocell per a poder-lo reconèixer quan el vegi.
        Els monitors estaran repartits per diferents llocs i els infants els hauran de buscar. Cada monitor s’encarregarà d’una o dues proves i, un cop superades, donarà una característica de l’ocell al grup. Cada grup anirà enganxant les pistes que aconsegueixi en una graella, en la qual apareixeran els conceptes que ens ajudaran a reconèixer cada ocell (mida, bec, aspecte, dieta, etc.). El nom de l’ocell no hi ha de sortir, ja que és la incògnita final. Hi haurà una línia de la graella per a cada grup i, per tant, per a cada ocell.
        
        L’última pista que se’ls donarà serà el lloc on trobaran les fotos o dibuixos de tots els ocells, de manera que, basant-se en les pistes que ja tenen, hauran d’endevinar quin és el seu i nom. Si no se’n surten, es pot fer una posada en comú i esbrinar-ho entre tots.
        Un cop tots els grups hagin descobert el seu ocell, s’aniran comentant les característiques de les diferents espècies, de manera oberta i participativa.
        
        Al final del joc, farem un comentari sobre tot el que hem après d’alguns ocells de la zona i la importància de conèixer els animals que ens envolten.`,
    avaluació: `L’activitat és més o menys divertida segons les proves que els grups hagin de fer per aconseguir les pistes. La gimcana permet apropar els participants, de forma lúdica, al fantàstic món dels ocells.
        Observacions

        És adequat per a totes les edats. Tot depèn del nivell de dificultat de les pistes que donem.
        Guies que poden ajudar a fer aquesta activitat: 

        “Quadern blanc”. Fundació Pere Tarrés. Departament d’educació ambiental.
        “Guía de campo de las aves de España y de Europa”. RT Peterson. Ediciones Omega.`,
    etiquetes: ["Esportiu", "Exterior"],
    isFavorite: false,
  },
  {
    id: 62,
    title: "Mags, bruixes i fades",
    descripció: `Joc de persecució en què els participants escenifiquen diversos personatges. És d’intensitat mitjana–alta i permet treballar la capacitat de reacció, així com els nervis o la por.`,
    participants: "Tants com vulguin",
    participantsmin: 2,
    participantsmax: 50,
    edats: "4-8",
    edatmin: 4,
    edatmax: 8,
    espai: "Exterior",
    durada: "20mins",
    duradamin: 20,
    objectius: (
      <div>
        <ul>
          <li>· Treballar la capacitat d’acció - reacció.</li>
          <li>· Incrementar l’orientació en l’espai.</li>
          <li>· Desenvolupar la coordinació global.</li>
        </ul>
      </div>
    ),
    material: `Sense material`,
    introducció: `Ens trobem en un bosc màgic i els diferents éssers que hi viuen -els MAGS, les BRUIXES i les FADES- estan en peu de guerra entre ells.`,
    desenvolupament: `Es fan dos grups que se situaran en forma de filera al mig de l’espai de joc, un davant de l’altre. Cada personatge té unes característiques pròpies que escenificarem de la manera següent:

        El mags es representen aixecant els braços amb veu forta.
        Les bruixes, fregant-se les mans, mig encorbades i amb la veu malèvola.
        Les fades, amb veu més prima, amb una vareta a la mà i aixecant una cama.
        Cada grup decideix què serà. Un cop decidit, tornarem a la formació de joc. Segons el personatge que haguem decidit serem perseguidors o perseguits.
        
        El monitor explica que els MAGS persegueixen les BRUIXES; les BRUIXES, les FADES, i aquestes, els MAGS. Caldrà fer primer les escenificacions pertinents, i quan diguem “1, 2, 3” cada grup farà el personatge escollit, perseguint o essent perseguit.
        
        Ens podem salvar tocant el límit del camp. Els jugadors que haguem agafat passaran a ser del nostre equip.`,
    avaluació: `Ens hem fixat en quins rols adopta cadascun dels participants? Les decisions col·lectives són necessàries.

        En el moment de córrer (perseguir o ser perseguits), hi ha molta gent que es queda paralitzada.
        
        És un bon element per començar a treballar la por.
        
        Referent a l'espai: un pati d’escola o un espai de 50 metres de llarg per 10 metres d’ample. També es pot jugar en un espai interior ampli i sense obstacles.`,
    etiquetes: ["Exterior", "Jocs curts"],
    isFavorite: false,
  },
  {
    id: 63,
    title: "Robots i enginyers",
    descripció:
      "Els infants actuaran com si fossin robots mentre un d’ells fa d’enginyer i ha de procurar que no se li perdi cap robot.",
    participants: "20-60(grups de 5-8)",
    edats: "9-11 anys",
    espai: "Exterior/Interior",
    edatmin: 9,
    edatmax: 11,
    participantsmin: 20,
    participantsmax: 50,
    durada: "15-30mins",
    objectiusMoni: (
      <div>
        <ul>
          <li>· Potenciar la cohesió de grup.</li>
          <li>· Fomentar l’enginy i la coordinació. </li>
        </ul>
      </div>
    ),
    objectiusInf: (
      <div>
        <ul>
          <li>· Idear el moviment i el so d’un robot.</li>
          <li>· Desenvolupar la psicomotricitat gruixuda.</li>
          <li>· Treballar en equip.</li>
          <li>· Millorar la capacitat de concentració i coordinació.</li>
        </ul>
      </div>
    ),
    material: `Sense material`,
    introducció: `El món dels robots acostuma a interessar molt als infants de certes edats. En aquest joc actuaran com si fossin robots i un d’ells els haurà de controlar per evitar que surtin de l’espai de joc.`,
    desenvolupament: `Dividirem el grup d’infants en equips d’uns 5-8 membres, que representaran un grup de robots amb un moviment i un so exclusiu que ells mateixos hauran de decidir. També han de decidir quina persona de cada grup actuarà com a enginyer. Després, els que fan d’enginyers es col·locaran al centre del camp i els monitors repartiran a tots els que fan de robots per tot l’espai procurant que els que són d’un mateix equip no quedin massa junts. Quan comenci el joc, els robots hauran d’avançar endavant fent el so i moviment del seu equip, no podran caminar de costat ni cap enrere. Si un robot es troba amb un obstacle (vorera, paret, un altre robot del mateix o d’un altre equip) es queda aturat fent el so i el moviment però sense avançar. Els enginyers han d’anar desplaçant-se pel camp de joc girant als robots del seu equip que s’hagin quedat aturats de manera que es puguin seguir desplaçant. També poden girar als robots quan estan a punt de quedar bloquejats. 

        Quan ja faci una estona que dura el joc, podem tornar-lo a repetir canviant el so i el moviment, així com la persona que fa d’enginyer. 
        
        Podem introduir una variant en la que l’enginyer hagi d’aconseguir que tots els seus robots es concentrin en un punt de camp de joc. En aquest cas guanyaria l’equip que ho aconsegueixi abans.`,
    avaluació: `Un cop haguem fet el joc unes quantes vegades, preguntarem als infants com s’han sentit fent de robots i com s’han sentit fent d’enginyers. Normalment, quan fan d’enginyers s’estressen molt ja que han d’estar pendents de molts robots a l’hora. Ens pot servir per reflexionar sobre la responsabilitat.`,
    etiquetes: [
      "Cooperatiu",
      "Exterior",
      "Interior",
      "Jocs curts",
      "Sense material",
    ],
    isFavorite: false,
  },
  {
    id: 64,
    title: "Aprenem a menjar jugant",
    descripció: `Es realitzaran tres jocs competitius i el grup guanyador de cada prova s’emportarà la imatge d’un aliment. Al final del joc s’ajuntaran les tres imatges i es descobrirà l’esmorzar saludable.`,
    participants: "15-20",
    participantsmin: 15,
    participantsmax: 20,
    edats: "4-8",
    edatmin: 4,
    edatmax: 8,
    espai: "Interior/Exterior",
    durada: "1h 30mins",
    duradamin: 90,
    objectius: (
      <div>
        <ul>
          <li>· Aprendre a esmorzar correctament.</li>
          <li>· Incrementar l’orientació en l’espai.</li>
          <li>· Diferenciar els grups d’aliments.</li>
          <li>· Conèixer la importància de realitzar un bon esmorzar.</li>
          <li>· Desenvolupar activitats motrius bàsiques.</li>
          <li>· Descobrir les preferències alimentàries de cada infant.</li>
        </ul>
      </div>
    ),
    material: `Cartolina, dibuixos d'aliments, cola, llapis, tisores i fulls en blanc`,
    introducció: `Es presentarà una cartolina amb el títol: Què s’ha d’esmorzar? A continuació, els infants hauran de dibuixar en un full en blanc el que esmorzen cada matí a casa i a l’escola.`,
    desenvolupament: `Es faran tres grups d’infants de 5 a 7 nens cadascun. A continuació, es realitzaran les tres proves: 

        1. Relleus: Els nens hauran d’anar corrents cap el monitor (situat a 10 m d’ells) i anomenar-li, cadascun d’ells, una peça de fruita. Al cap d’una estona, farem el recompte de paraules escrites (no repetides). L’equip que en tingui més guanyarà una imatge: els cereals (pa, cereals d’esmorzar, galetes, etc.). 
        
        2. Joc del telèfon: Un nen s’inventarà una paraula i li haurà de dir al del costat. Així fins arribar a l’últim nen, que haurà de dir en veu alta el que hagi sentit. Finalment, es comptaran les paraules que hagin arribat correctes a l’últim nen. L’equip que més paraules hagi aconseguit guanyarà el segon dibuix: els làctics (llet, iogurt, formatges, etc.). 
        
        3. Xarxa tròfica: Cada grup té un terreny marcat. Els integrants del grup estaran situats en forma de triangle. Un grup haurà d’atrapar els de la dreta, però vigilant, perquè els de l’esquerra els poden agafar. L’equip que tingui menys infants agafats guanyarà la tercera imatge: la fruita (pomes, peres, raïm, plàtan, etc.). 
        
        Seurem tots a terra i cada grup enganxarà a la cartolina la imatge que hagi guanyat. Així haurem descobert que, per tenir energia durant tot el matí, hem de prendre aquests tres grups d’aliments.`,
    avaluació: `Cada nen explicarà el que haurà dibuixat a l’inici, i haurà de dir si ha fet l’esmorzar correcte o no. A continuació, enganxarà el seu dibuix en una cartolina gran i entre tots haurem construït un mural.`,
    etiquetes: ["Exterior", "Interior"],
    isFavorite: false,
  },
  {
    id: 65,
    title: "El pare gegantàs",
    descripció: `Joc de persecució per a infants que inicien la descoberta dels jocs amb poques normes.`,
    participants: "5+",
    participantsmin: 5,
    participantsmax: 20,
    edats: "4-8",
    edatmin: 4,
    edatmax: 8,
    espai: "Exterior",
    durada: "5-10mins",
    duradamin: 5,
    objectius: (
      <div>
        <ul>
          <li>· Descoberta de jocs amb poques normes</li>
        </ul>
      </div>
    ),
    material: `Sense material`,
    introducció: `Un dels jugadors fa de pare gegantàs i aquest es troba en un espai que hem delimitat que és la cova. `,
    desenvolupament: `Els altres jugadors corren i salten al seu voltant mentre canten:

        El pare gegantàs porta puces, porta puces.
        
        El pare gegantàs porta puces al cabàs
        
        En un moment donat el pare gegantàs es desperta i corre a atrapar els altres jugadors i quan atrapa algú se l'emporta a la seva cova i torna a dormir. El joc continua igual unes quantes vegades fins que el director de l'activitat veu que els infants es cansen. Mentre el pare gegantàs va a caçar nens i nens, els de la cova intentaran escapar-se.`,
    avaluació: `Per una banda, amb infants molt petits cal tenir present que no saben què vol dir perseguir. Al començament, és possible que alguns nens que haurien de fugir es deixin atrapar perquè volen canviar el rol. Això s'ha d'anar treballant i en la mesura que en prenguin consciència els infants aniran jugant cada vegada millor als jocs de persecució.
        D'altra banda, en la mesura que els infants entenen aquest tipus de joc són dels jocs que més els agraden. Penseu que els jocs motrius són els més atractius en infants de 5 anys cap endavant.`,
    etiquetes: ["Exterior", "Jocs curts"],
    isFavorite: false,
  },
  {
    id: 66,
    title: "Anem al mercat",
    descripció: `Es realitzaran diverses activitats per tal de poder conèixer diversos aliments. Al final del joc es trobarà el dinar ideal i el perquè d’aquesta combinació d’aliments.`,
    participants: "20",
    participantsmin: 20,
    participantsmax: 40,
    edats: "4-11",
    edatmin: 4,
    edatmax: 11,
    espai: "Interior/Exterior",
    durada: "1h 30mins",
    duradamin: 5,
    objectius: (
      <div>
        <ul>
          <li>· Aprendre a dinar correctament.</li>
          <li>· Conèixer la importància de realitzar un bon dinar.</li>
          <li>
            · Conèixer les parades del Mercat, i el funcionament d’aquest.
          </li>
          <li>· Descobrir nous aliments.</li>
          <li>· Desenvolupar activitats motrius bàsiques.</li>
          <li>· Saber escollir entre varis aliments d’una mateixa família.</li>
        </ul>
      </div>
    ),
    material: `Fulls en blanc, colors, llapis, tisores`,
    introducció: `Per tal de conèixer a tot el grup d’infants, es farà una rotllana, on cada infant haurà de dir el seu nom, el seu aliment preferit, i el lloc on creu que s’ha de comprar.`,
    desenvolupament: `Es realitzaran 4 grups i a cadascú se li assignarà una parada del Mercat (Fruiteria, carnisseria, peixateria i fleca).

        Per tal de conèixer els productes que els hi toca vendre, hauran de realitzar tres proves:
        
        Sopa de lletres amb els aliments de la seva botiga.
        Dibuixar els aliments trobats a les sopes de lletres.
        Busca els aliments de la teva parada: els infants hauran de trobar i agafar els aliments de la seva parada, que estaran amagats per un espai exterior.
        A continuació, es realitzarà el joc del Mercat:
        
        Un nen de cada grup farà de botiguer i la resta, faran de compradors. Aquests estaran repartits en un gran espai, i hauran d’anar a comprar a les diverses botigues, però ho hauran de fer de varies maneres (p.e. passejar i comprar al mercat com si fossin nens petits, avis, animals, sense poder parlar, parlar molt i molt ràpid, parlar molt a poc a poc, cridant...). El monitor és l’encarregat de dinamitzar el joc i dir les modalitats.`,
    avaluació: `Al finalitzar el joc es juntaran per grups, i cadascú ensenyarà el que ha comprat. A continuació, s’haurà de confeccionar un dinar equilibrat. El monitor explicarà que un dinar correcte ha de tenir cereals (encarregats de donar-nos energia), proteïna (encarregat de fer-nos créixer), verdures (encarregats de donar-nos vitamines i minerals) i el postre, on es donarà una peça de fruita o un làctic.`,
    etiquetes: ["Exterior", "Interior"],
    isFavorite: false,
  },
  {
    id: 67,
    title: "Descoberta de la tardor",
    descripció: `Plantegem conèixer la vida d’un bolet. Com són, com es reprodueixen...`,
    participants: "15",
    participantsmin: 15,
    participantsmax: 40,
    edats: "4-11",
    edatmin: 4,
    edatmax: 11,
    espai: "Exterior",
    durada: "3h",
    duradamin: 5,
    objectius: (
      <div>
        <ul>
          <li>· Conèixer les diferències entre fong i bolet.</li>
          <li>· Reconèixer els bolets més típics dels nostres boscos.</li>
          <li>· Fomentar actituds respectuoses envers la natura.</li>
          <li>· Gaudir d’una activitat en grup en un entorn natural.</li>
          <li>· Conèixer, respectar i estimar la natura.</li>
        </ul>
      </div>
    ),
    material: `Una guia de bolets ens pot ser molt útil tant per preparar la descoberta com quan l’estiguem fent.`,
    introducció: `L’experiència ens diu que no sempre trobarem bolets; per tant, portarem preparades algunes activitats:`,
    desenvolupament: `Prova 1

        Diferenciar entre fong i bolet:
        
        Els bolets són la part visible d’un fong. Ara bé, no tots els fongs donen lloc a un bolet. Hi ha fongs que tenen una mida microscòpica, però que són molt importants a les nostres vides, com els llevats, els antibiòtics i les floridures.
        
        Joc: Memori de bolets i fongs (floridura del pa, podem introduir els líquens).
        
        Prova 2
        
        Com es reprodueix un bolet?
        
        Els bolets produeixen milions d’espores i l’aire és l’encarregat de transportar-les. Com que no tots els llocs són adequats per germinar, doncs no tenim milions de bolets!
        
        Joc: Donarem a 2/3 parts dels nens pinces d’estendre la roba. Aquestes pinces representaran que són les espores, 1/3 part dels nens representarà el lloc idoni perquè les espores germinin. L’objectiu és aconseguir enganxar les pinces a la roba d’aquests nens. Les pinces que s’enganxin seran espores que aconseguiran germinar; les que no, s’hauran perdut.
        
        Prova 3
        
        Coneixem els bolets més típics del territori:
        
        Si pel camí hem vist algun bolet, segurament n’hi havia de no comestibles. És important mostrar que no hem de collir tot allò que trobem, i que si no ho coneixem no cal ni tocar-ho.
        
        Joc: Mocador de bolets.
        
        Escollirem bolets típics d’on estem fent la descoberta (comestibles o no). El monitor dirà un número i el nom d’un bolet i els nens sortiran a buscar-ne la fotografia.`,
    avaluació: `Al final de la descoberta podem comprovar si els objectius que ens hem marcat els hem assolit.`,
    etiquetes: ["Exterior"],
    isFavorite: false,
  },
  {
    id: 68,
    title: "Juguem al geocaching",
    descripció: `El Geocaching és un joc d’exterior amb localitzadors GPS.`,
    participants: "Grups de 5-10",
    participantsmin: 5,
    participantsmax: 50,
    edats: "9-18",
    edatmin: 9,
    edatmax: 18,
    espai: "Exterior",
    durada: "2/3h",
    duradamin: 5,
    objectius: (
      <div>
        <ul>
          <li>
            · Conèixer el funcionament i possibilitats d’un localitzador GPS.
          </li>
          <li>· Promoure la presa de decisions en petit grup.</li>
          <li>· Fomentar l’autonomia personal.</li>
          <li>
            · Experimentar el sentit de l’orientació i l’emoció de la recerca.
          </li>
          <li>· Passar una estona divertida a la natura o a l’aire lliure.</li>
        </ul>
      </div>
    ),
    material: `Localitzador GPS, piles, els tresors a amagar, papers, bolígrafs i un xiulet`,
    introducció: `Asseurem tots els participants junts, a poder ser a l’exterior, i farem una petita introducció al GPS o Sistema de Posicionament Global, que ens permet marcar la posició d’un punt gràcies a un conjunt de satèl·lits.

        Geocaching ve de Geo que vol dir Terra i cache [cash] que vol dir amagatall. Res a veure amb el verb to catch, agafar o atrapar.`,
    desenvolupament: `El joc és molt senzill, però l’hem d’explicar de forma clara: cada grup tindrà un objecte o un tresor a amagar i l’haurà d’anar a deixar en algun lloc del bosc. Aquest punt el marcaran al localitzador i tornaran cap al punt de sortida. Per fer-ho, en total, tindran trenta minuts.

        Quan hagin tornat tots els grups s’intercanviaran els localitzadors de forma ordenada i només quedarà el més divertit: sortir a la recerca del tresor! Donem la sortida com si fos una cursa (que, de fet, ho és) i guanyarà el grup que porti abans el tresor que ha de trobar fins el punt de sortida.`,
    avaluació: `L’activitat funciona, és engrescadora i tots els participants tenen ganes de repetir. Els localitzadors més econòmics són molt atractius i de maneig molt senzill.

        El més complicat possiblement sigui fer-los entendre que la distància que els surt fins el tresor és en línia recta i que no siguin imprudents a l’hora de baixar desnivells, etc.
        
        És important que tinguin clar que han d’anar sempre tots junts.`,
    etiquetes: ["Exterior", "Jocs de pistes i gimcanes"],
    isFavorite: false,
  },
  {
    id: 69,
    title: "Passar la frontera",
    descripció: `Un joc que requereix velocitat i agilitat, però també capacitat d’organització i estratègica`,
    participants: "12-16",
    participantsmin: 12,
    participantsmax: 16,
    edats: "9-18",
    edatmin: 9,
    edatmax: 18,
    espai: "Exterior",
    durada: "15mins",
    duradamin: 15,
    objectius: (
      <div>
        <ul>
          <li>· Potenciar el treball en equip.</li>
          <li>· Treballar l’estratègia grupal.</li>
          <li>· Acceptar les diferències entre els companys.</li>
          <li>· Treballar la coordinació i agilitat.</li>
          <li>· Treballar la velocitat de reacció.</li>
          <li>· Potenciar l’expressió corporal.</li>
        </ul>
      </div>
    ),
    material: `Cércols, pitrals, cons, una pica, dues o tres pilotes o material tou`,
    introducció: `S’han de fer dos equips amb el mateix nombre de components i intentar que estiguin anivellats tant d’aptituds físiques com cognitives. Fets els equips, els podem diferenciar posant pitrals a un d’ells.
        Per poder jugar, dividirem el camp en dues parts: una més petita, d’uns 10 m de llargada per tota l’amplada de la pista, i una altra que ocuparà la resta de la pista o camp. A la petita, s’ha de posar una línia amb guix al terra o uns cons per saber d’on sortiran els membres de l’equip atacant. A la part més gran, on hi ha l’equip defensor, es posaran uns 5 o 6 cèrcols on els atacants podran quedar-se sense ser eliminats i una pica al final de tot.`,
    desenvolupament: `Els atacants, d’un en un, parteixen de la zona petita i han de creuar el camp contrari, donar la volta per darrere de la pica i tornar al seu camp. Si en alguna ocasió es veuen en perill, poden refugiar-se en un dels cèrcols.
        L’equip defensor es reparteix per tot el seu camp i tindrà una o dues pilotes petites, segons el nombre de participants. Amb aquesta pilota, els participants d’aquest equip poden eliminar els atacants que entrin al seu camp. Com? S’aniran passant la pilota entre els defensors i, quan tinguin un atacant a l’abast que no estigui dins del cèrcol, l’hauran de tocar amb la pilota. Si el toquen, queda eliminat i ha de tornar al seu camp. Els defensors no poden córrer amb la pilota a les mans i no poden llançar-la per eliminar un atacant.
        Quan tots els atacants han intentat passar i creuar la pica, es canvien la tanda i els rols: els atacants passen a ser defensors i viceversa.`,
    avaluació: `Es puntua de la manera següent:

        Per cada atacant que passa i aconsegueix creuar la pica, així com tornar al seu camp sense ser eliminat ni parar en cap cèrcol per salvar-se: l’equip suma 3 punts.
        
        Per cada atacant que passa i aconsegueix creuar la pica, així com tornar al seu camp, però s’ha de parar en un cèrcol o més: l’equip suma 1 punt.
        
        Si algun atacant entra en camp contrari i és tocat amb la pilota, és eliminat i en aquella tanda no pot sumar punts. 
        El joc es pot acabar quan els monitors vulguin, però cada equip ha d’haver fet el mateix nombre de tandes d’atacant i de defensor. Es fa la sumatòria de totes les tandes i l’equip amb més punts és el vencedor.`,
    etiquetes: ["Exterior"],
    isFavorite: false,
  },
  {
    id: 70,
    title: "Encerto i salto!",
    descripció: `Joc que juguen els dominicans de Palavé a totes hores i que combina estratègia i força. L'equip que encerta en quina mà està amagada la pedreta pot fer un salt i guanya qui arriba més lluny!`,
    participants: "2 equips iguals",
    participantsmin: 5,
    participantsmax: 50,
    edats: "4-15",
    edatmin: 4,
    edatmax: 15,
    espai: "Exterior",
    durada: "15-30mins",
    duradamin: 15,
    duradamax: 30,
    objectius: (
      <div>
        <ul>
          <li>· Establir estratègies de grup.</li>
          <li>· Coordinar el lideratge positiu.</li>
          <li>· Desenvolupar l'agilitat física.</li>
        </ul>
      </div>
    ),
    material: `Una pedreta i un pal.`,
    introducció: `Els infants del batey de Palavé, a la República Dominicana, juguen i es diverteixen pels carrers sense necessitar cap material especial. És per això que aquest joc que només requereix una pedreta i un pal és molt popular entre els infants i els no tan infants, doncs també hi juguen els adolescents i joves del barri. El joc és d'astúcia i força física i entre ells creix una gran competitivitat mentre hi participen, tot i que quan s'acaba, s'obliden totes les cridòries. Per experiència pròpia, comencen jugant dos grups de quatre persones i acaben sent-hi dos grups de 15 amb mitja comunitat involucrada: pares, joves i infants de tres anys participant-hi, és molt engrescador!`,
    desenvolupament: `Els dos equips creen dues files, uns al davant dels altres i es marca una línia al costat de l'últim jugador. El líder de l'equip que comença passa per darrere dels seus companys i dóna una pedreta a un d'ells. Aquests mostren els punys tancats als de l'altre grup i el líder de l'altre grup escull a un jugador perquè encerti qui té la pedreta. Els altres el poden ajudar si detecten algun jugador sospitós.

        Si encerta on està la pedreta podrà fer un salt a partir de la línia de sortida i marcar el lloc on ha arribat com la meta del seu equip, tot i així si no toca la línia de sortida amb el peu no es valdrà el salt i hauran perdut el torn. Si encerten on està la pedreta i fan bé el salt, els de l'altre equip hauran de tornar a amagar-se la pedreta i així consecutivament, fins que no l'encertin. Si no l'encerten es canvia de torn i són ells qui hauran d'amagar la pedreta.
        
        Cada salt que facin serà a partir de la línia que ha fet l'anterior company d'equip, així que cada vegada estaran més lluny dels jugadors i s'anirà creant com un marcador al terra. L'equip que arriba més lluny o el primer en arribar a una certa marca és l'equip guanyador.
        
        Alerta: el líder de l'equip no pot escollir dues vegades el mateix jugador per encertar la pedreta i recordem que el jugador que l'ha encertat és qui haurà de saltar. Es pot anar canviant de líder cada tres torns.`,
    avaluació: `Cada equip haurà d'avaluar el joc i com s'ha sentit cada jugador en els diferents rols: com a líder, com a jugador participant, com a encertador o com a mentider si tenia la pedreta i no volia fer-ho notar. També l'estratègia del grup i la capacitat de perdre o guanyar.`,
    etiquetes: ["Exterior"],
    isFavorite: false,
  },
  {
    id: 71,
    title: "El seiva",
    descripció: `Joc per afavorir el coneixement dels jocs populars i dels trets característics de la cultura africana, així com fomentar la inclusió dins del grup – classe. Tanmateix, podem observar i treballar les relacions interpersonals que s'estableixen dins del grup, a més de les destreses motrius bàsiques.`,
    participants: "8+",
    participantsmin: 8,
    participantsmax: 50,
    edats: "9-15",
    edatmin: 9,
    edatmax: 15,
    espai: "Interior/Exterior",
    durada: "10-15mins",
    duradamin: 15,
    duradamax: 30,
    objectiusMoni: (
      <div>
        <ul>
          <li>
            · Afavorir la inclusió dins de l'espai educatiu en el qual es
            trobin.
          </li>
          <li>
            · Emfatitzar els punts en comú que comparteixen els infants de
            diferents indrets del món, més enllà de les diferències culturals,
            religioses i ètniques que poden existir.
          </li>
          <li>
            · Valorar les relacions interpersonals establertes entre els infants
            durant la realització del joc.
          </li>
          <li>
            · Conèixer i reflexionar sobre els trets característics de la
            cultura africana.{" "}
          </li>
        </ul>
      </div>
    ),
    objectiusInf: (
      <div>
        <ul>
          <li>· Desenvolupar les destreses motrius bàsiques.</li>
          <li>
            · Establir estratègies de cooperació i oposició durant la
            realització del joc.
          </li>
          <li>
            · Transformar les seves emocions mitjançant la pràctica d'activitat
            física.
          </li>
          <li>· Aprendre a respectar els seus iguals i al monitor/docent.</li>
        </ul>
      </div>
    ),
    material: `Cons o bé tires de plàstic per tal de delimitar una àrea específica del terreny de joc.`,
    introducció: `En primer lloc contextualitzarem l'origen d'aquest joc i prepararem l'espai per la realització d'aquest, tot assegurant-nos que no existeix cap factor de risc. Tot seguit, delimitarem una àrea de salvament mitjançant cons o tires de plàstic. A continuació, establirem els rols necessaris pel correcte funcionament del joc de manera bconjunta amb els nostres infants, és a dir, triarem un cameller i un camell. El camell haurà d'anar caminant a quatre grapes per tot el terreny de joc i el cameller haurà d'anar guiant al seu camell, sense perdre el contacte físic amb ell.`,
    desenvolupament: `El cameller anirà guiant al seu camell per tot l'espai de joc, mentre la resta dels infants es mantenen allunyats del camí del cameller i el camell.

        En el moment que el cameller crida la paraula SEIVA, la resta d'infants han de respondre amb la mateixa paraula; aleshores tots els infants del grup han d'anar corrents cap al camell i intentar tocar-lo. El cameller ha d'intentar defensar al seu camell, tot tocant amb qualsevol part del seu cos als infants abans que aquests toquin al seu camell; és molt important recalcar que el cameller mai pot perdre el contacte físic amb el seu camell, ja que si no aquest marxarà. Els alumnes que han estat tocats pel cameller hauran de seure a terra.
        
        El primer cop que un alumne toca el camell sense ser tocat pel cameller crida "primer", el segon cop crida "segon" i el tercer cop crida "tercer"; aleshores el cameller ha de sortir corrents i tractar d'escapar-se amb l'objectiu d'arribar a l'àrea de salvament (delimitada amb anterioritat), ja que la resta d'infants han d'intentar d'atrapar-lo, ja que no ha estat capaç de protegir de manera adient al seu camell.
        
        Tot seguit el joc tornarà a començar, tot canviant els rols dels infants.`,
    avaluació: `Finalitzarem l'activitat, tot reflexionant amb els infants sobre les seves sensacions i emocions durant el transcurs del joc. Seguidament deixarem un espai perquè els nens i nenes proposin aspectes a millorar del joc i parlin sobre les estratègies que han anat adoptant per tal d'aconseguir el seu objectiu. Tanmateix com a docents donarem el nostre punt de vista sobre com els infants han anat interactuant durant el transcurs del joc, tot emfatitzant els objectius establerts amb anterioritat. Per concloure, fomentarem l'intercanvi de coneixements entre els infants sobre els trets característics de la cultura africana, així com tractarem de desmuntar diferents mites envers la immigració.`,
    etiquetes: ["Exterior", "Interior", "Jocs curts"],
    isFavorite: false,
  },
  {
    id: 72,
    title: "El topao",
    descripció: `Divertir-se jugant a la versió dominicana del Pi.`,
    participants: "Tants com vulguin",
    participantsmin: 5,
    participantsmax: 50,
    edats: "9-18",
    edatmin: 9,
    edatmax: 18,
    espai: "Exterior",
    durada: "30-60mins",
    duradamin: 30,
    duradamax: 60,
    objectius: (
      <div>
        <ul>
          <li>· Desenvolupar les habilitats motrius.</li>
          <li>· Fomentar l'estratègia.</li>
          <li>· Aprendre a divertir-se sense necessitat de gastar material.</li>
        </ul>
      </div>
    ),
    material: `Una ampolla buida de tamany mitjà`,
    introducció: `La capacitat de transformar qualsevol objecte en una fantàstica joguina és el punt fort dels infants de Palavé, a la República Dominicana. Tot pot ser reutilitzat i afegit al joc. El Topao n'és un exemple, on una ampolla de plàstic buida de refresc o detergent passa a ser una pilota d'allò més divertida.`,
    desenvolupament: `Un dels jugadors xuta l’ampolla ben lluny i el qui para ha d'anar a buscar-la corrents. Mentre ell corre, els altres han d'amagar-se i quan l'agafa la planta al terra, es gira i diu Topao-Topao i comença el joc. L'infant que para pot moure's lliurement, però la botella ha de restar al seu lloc durant aquell torn. Si veu a un company ha d'anar corrents a tocar l’ampolla i dir Topao-Topao i el nom de l'infant. Si ho ha encertat aquell infant queda desqualificat i pot continuar buscant els altres.

        Tot i així, els jugadors que no han estat desqualificats poden anar a xutar l’ampolla i si ho fan es torna a començar el joc. Tots es poden tornar a amagar mentre qui para torna a buscar l’ampolla. El joc s'acaba quan qui para troba a tots els infants.`,
    avaluació: `Breu reflexió sobre l'ús de material reciclat en els jocs i com podem transformar objectes que ens semblaven que ja hauríem de llençar gràcies a la imaginació.`,
    etiquetes: ["Exterior"],
    isFavorite: false,
  },
  {
    id: 73,
    title: "El passadís de les emocions",
    descripció: `Proposem treballar la identificació de les emocions i la posterior transformació. Busquem el replantejament de certes creences i evidenciar la capacitat d’identificar com se sent l’altre i la responsabilitat envers allò que està passant`,
    participants: "10-15",
    participantsmin: 10,
    participantsmax: 15,
    edats: "12-18",
    edatmin: 12,
    edatmax: 18,
    espai: "Interior/Exterior",
    durada: "30-60mins",
    duradamin: 30,
    duradamax: 60,
    objectiusMoni: (
      <div>
        <ul>
          <li>· Facilitar espais de consciència emocional.</li>
          <li>
            · Afavorir que els joves i adolescents es responsabilitzin de les
            seves conductes.{" "}
          </li>
          <li>
            · Trencar amb el: “Jo no sabia que l’altre s’estava sentint
            malament”.
          </li>
        </ul>
      </div>
    ),
    objectiusInf: (
      <div>
        <ul>
          <li>
            · Millorar la consciència emocional (identificació d’emocions).{" "}
          </li>
          <li>
            · Incidir sobre la responsabilitat individual (tots som capaços
            d’identificar com se sent l’altre).
          </li>
          <li>
            · Promoure que el jove/infant es qüestioni les seves creences i
            justificacions davant de la violència.
          </li>
        </ul>
      </div>
    ),
    material: `Sense material`,
    introducció: `Demanem un voluntari, al qual li direm sense que el grup ho senti quina emoció ha de representar. Distribuïm la resta del grup formant un passadís.`,
    desenvolupament: `El voluntari ha de recórrer el passadís representant l’emoció acordada a través del cos i de les paraules i el grup ha d’identificar aquesta emoció. 

        Seran emocions que ens ajudin a parlar de situacions d’assetjament, per exemple: tristesa, ràbia, culpa, eufòria... Un cop identificada l’emoció se’ls anima a què acompanyin al voluntari a transformar aquesta emoció cap a la serenitat o cap a una emoció que li faci sentir benestar. Ho poden fer a través del cos i de les paraules. 
        
        Podem repetir aquesta dinàmica tants cops com vulguem, amb diferents voluntaris que representin diferents emocions.`,
    avaluació: `Per fer l'avaluació compartirem experiències i transferirem el que ha passat en el joc a la realitat de cadascú. Ho farem a través del plantejament de preguntes com: 

        Com us heu sentit abans, durant, després...?
        Creus que en el dia a dia pots intuir o preguntar com se sent l'altre?
        Com actuaràs a partir d'ara?
        Què passaria si la persona no vol canviar la seva emoció?`,
    etiquetes: ["Exterior", "Interior", "Sense material"],
    isFavorite: false,
  },
  {
    id: 74,
    title: "La lluna i les gràcies",
    descripció: `En aquesta dinàmica es vol demostrar com a partir de donar les gràcies o de no fer-ho, la gent té una actitud diferent vers aquesta persona.`,
    participants: "5 Mín",
    participantsmin: 5,
    participantsmax: 50,
    edats: "9-15",
    edatmin: 9,
    edatmax: 15,
    espai: "Interior/Exterior",
    durada: "15mins",
    duradamin: 15,
    objectius: (
      <div>
        <ul>
          <li>
            · Treballar l’educació que ha de tenir una persona vers la societat.
          </li>
          <li>· Cohesionar el grup de monitors/es o d’infants.</li>
          <li>· Fomentar la capacitat d’anàlisi i d'observació.</li>
          <li>
            · Crear un clima distès, positiu i de diversió entre els
            participants.
          </li>
          <li>· Reflexionar sobre la pròpia conducta.</li>
        </ul>
      </div>
    ),
    material: `Un llapis`,
    introducció: `Farem una rotllana i escollirem diversos voluntaris perquè abandonin la sala. El dinamitzador explica als que es queden que cadascú, en el moment en què se li passa el llapis, ha de dibuixar una lluna “a l’aire”. Un cop dibuixada, la resta de participants hauran d’aplaudir o criticar-ho negativament. Aquest criteri es durà a terme segons el monitor/a o l’infant que rep el llapis doni les gràcies o bé decideixi no fer-ho.`,
    desenvolupament: `Cada participant entra d’un en un. D’aquesta manera la dinàmica dura més. Si algun participant no entén per què els membres de la rotllana actuen d’una forma a d’una altra, ho ha d’acabar descobrint per poder entrar a la rotllana i dir el motiu que porta a l’aplaudiment o bé al rebuig de la lluna dibuixada pels altres membres.`,
    avaluació: `Un cop han fet el joc tots els voluntaris i, tant si han descobert el per què de l’actitud de la resta de participants com si no ho han fet, hem de debatre i reflexionar sobre: la importància de dir gràcies, si normalment donem les gràcies, si dir gràcies implica major acceptació del nostre entorn, com ens sentim quan la gent ens aplaudeix o quan ens valoren negativament, com ens sentim quan ens donen les gràcies...`,
    etiquetes: ["Exterior", "Interior", "Jocs curts"],
    isFavorite: false,
  },
  {
    id: 75,
    title: "La cerca del tresor",
    descripció: `Tradicional joc de trobar el tresor seguint les pistes amb un mapa.`,
    participants: "12-20",
    participantsmin: 12,
    participantsmax: 20,
    edats: "9-15",
    edatmin: 9,
    edatmax: 15,
    espai: "Exterior",
    durada: "1h",
    duradamin: 15,
    objectiusMoni: (
      <div>
        <ul>
          <li>· Evitar que s’estableixin rols de lideratge molt marcat.</li>
          <li>· Potenciar el treball en equip entre els participants. </li>
        </ul>
      </div>
    ),
    objectiusInf: (
      <div>
        <ul>
          <li>· Coordinar-se amb els companys durant el joc.</li>
          <li>· Treball en equip sense competició. </li>
        </ul>
      </div>
    ),

    material: `Cartolines i retoladors`,
    introducció: `Aquest és un joc per treballar en equip per trobar el tresor seguint unes pistes que els conduirà a cada peça del trencaclosques per trobar el tresor.`,
    desenvolupament: `Dividim els jugadors en dos equips equilibrats.

        El dinamitzador de l’activitat repartirà a cada grup una primera pista que el conduirà a la primera peça del trencaclosques. Allà troba la peça del trencaclosques i una nova pista per continuar trobant les peces restants. Així successivament fins que finalment el trencaclosques mostra un mapa i aquest indica on està enterrat el tresor. Les pistes són endevinalles sobre el lloc on està amagada la peça del trencaclosques. Quan ja saben on és el tresor només queda desenterrar-lo i descobrir quines riqueses amaga!  
        
        Variant: Enlloc d’endevinalles poden ser petits jocs i/o que les indicacions es donin amb azimuts (llavors, és necessària una brúixola).`,
    avaluació: `Durant el joc podem observar com els infants es relacionen entre ells.
        Podem observar quines facilitats o dificultats tenen els infants a l’hora de resoldre les incògnites.
        Crear pistes i trossos de fitxes molt visuals, clares i senzilles per a tots tipus de públics. El mapa ha de ser molt detallat i no es descartaria pistes en Braille per persones amb deficiència visual.`,
    etiquetes: ["Exterior", "Jocs de nit"],
    isFavorite: false,
  },
  {
    id: 76,
    title: `Gimcana "l'estalvi de l'aigua"`,
    descripció: `Gimcana per equips en què l'objectiu és prendre consciència de l'estalvi d'aigua.`,
    participants: "Grup nombrós",
    participantsmin: 10,
    participantsmax: 30,
    edats: "4-11",
    edatmin: 4,
    edatmax: 11,
    espai: "Exterior",
    durada: "2h",
    duradamin: 15,
    objectiusMoni: (
      <div>
        <ul>
          <li>· Crear un vincle afectiu amb els infants.</li>
          <li>· Prendre consciència de l'heterogeneïtat de cada grup. </li>
          <li>· Assumir les responsabilitats col·lectivament.</li>
          <li>· Funcionar sentint-nos com un equip. </li>
        </ul>
      </div>
    ),
    objectiusInf: (
      <div>
        <ul>
          <li>· Conèixer les pròpies capacitats físiques i intel·lectuals.</li>
          <li>· Prendre consciència del treball en equip. </li>
          <li>· Aprendre a revisar i a valorar les accions que fan. </li>
          <li>· Assumir responsabilitats.</li>
          <li>
            · Descobrir realitats i problemàtiques socials, com la importància
            de l'ús responsables d'aigua.{" "}
          </li>
        </ul>
      </div>
    ),

    material: `3 galledes, 2 cubells, 1 porró, xeringues, cordill, vaixells fets amb paper, altaveu amb música`,
    introducció: `A través d’una gimcana formada per di- verses proves, es pretén treballar el con- sum responsable d’aigua amb els infants. L'activitat s’iniciarà amb una motivació que reflexionarà sobre tot allò que pot canviar si s’esgoten les reserves d'aigua. El personatge remarcarà la importància d’assolir cada provasense perdre l’aigua de la que parteix cada equip i treballant sempre en grup.`,
    desenvolupament: `Abans d’iniciar el circuit de proves, es distribuiran els responsables de prova (monitors/es) per l’espai amb el material necessari. 

        Es distribuiran els infants en grups realit- zats a l’atzar. A cada grup se li entregarà una cartolina amb el recorregut de proves a seguir. Després de cada senyal (xiulet, cançó) hauran de passar a la següent prova. 
        
        Suggeriment de proves:
        
        1. Transport  d'aigua  des  d’una  galleda a una altra separades per una certa distància. Poden utilitzar mans, gorra, mullar el fulard o alguna peça de roba i escorrer-la, etc. Passat el temps assignat (10 min), s’atura la prova i es fa una marca a la galleda per registrar fins on ha arribat cada grup.
        
        2. Recital de poesia. Cada participant ha d’atrevir-se a recitar algun re- frany, cançó o poema amb la boca plena d’aigua, sense que li caigui.
        
        3. Som art. Dins d'un cubell d’aigua, cada grup ha d’aconseguir crear una obra d’art amb material que puguin trobar pel voltant (fulles, branques, algun paper, plàstic…). Un cop passat els 10 minuts de la prova es foto- grafia el resultat final de cada grup.
        
        4. Apuntem amb gràcia. La meitat dels membres del grup es tapen els ulls i es col·loquen a una certa distància aguantant un got cadascú. L’altra meitat  es  col·loca  a  l’altra   banda  i  amb  una  xeringa  cada un han d’encertar dins del got de la persona que tenen davant.
        
        5. Que el vaixell arribi a port. Per parelles, un es tapa els ulls i es lliga un cordill a la cintura amb un vaixell de paper que hi penja. A uns metres hi ha un recipient amb una mica d’aigua. L’altre membre de la parella ha d’anar donant indicacions a la persona que va amb els ulls tapats perquè arribi a la zona del recipient (port). Un cop s’ha arribat, amb moviments de cintura, s’ha d’aconseguir que el vaixell que li penja del cordill encerti dins el port. Després s’intercanvien els rols entre les parelles.
        
        6. Aeuiou. Es fa una rotllana i es van passant un globus ple d’aigua men- tre van dient les lletres vocals A-E-I-O-U. Pot alternar-se el grau de dificultat jugant amb dues mans, amb una única mà, amb els peus…
        
        Un cop realitzades les diferents proves, s’iniciarà la darrera part de l’activitat. Cada grup es reunirà per preparar una breu explicació en la que suggeriran què faran amb l’aigua que han mantingut després de tota l’activitat.
        
        És interessant observar la diversitat d’idees que es generen, tals com:
        
        Repartir-nos l’aigua per beure entre els membres del grup.
        Buscar una planta, plantar-la en un lloc determinat i regar-la.
        Mullar-nos perquè tenim molta calor.`,
    avaluació: `Es suggereix fer l’avaluació tant pel grup d’infants com per l’equip de monitors i monitores. És important fer anàlisi dels coneixements previs, de la participació,de l'evolució, de l'assoliment d'objectius, de la dinamització de l'equip educatiu...

        D’aquesta manera s’aconseguirà tenir  una valoració global, amb els encerts i els errors, i amb propostes de millora.`,
    etiquetes: ["Exterior", "Jocs de pistes i gimcanes"],
    isFavorite: false,
  },
  {
    id: 77,
    title: `Ens cuidem?`,
    descripció: `Dinàmica en la qual cada monitor o monitora ha de vetllar per un altre company durant el curs.`,
    participants: "Els que formin l'equip",
    participantsmin: 1,
    participantsmax: 20,
    edats: "Monitors",
    edatmin: 18,
    edatmax: 18,
    espai: "Interior/Exterior",
    durada: "Tot el curs de l'esplai",
    objectius: (
      <div>
        <ul>
          <li>· Cuidar a un membre de l’equip de monitors.</li>
          <li>· Treballar pel bon ambient a l’equip de monitors. </li>
          <li>
            · Enfortir relacions entre els membres de l’equip de monitors.
          </li>
        </ul>
      </div>
    ),

    material: `Sense material`,
    introducció: `Com a responsables de l’esplai és molt important que coneguem quin és el moment de cada monitor, com es troba, quines són les seves inquietuds, com el podem ajudar. Com això és una tasca complicada per a una sola persona, posarem en marxa una dinàmica per tal que cada membre de l’equip vetlli pel benestar d’un altre monitor.`,
    desenvolupament: `A l’inici de curs, el responsable exposarà la dinàmica. Cada membre del grup, al llarg del curs, haurà de vetllar perquè un altre membre se senti sempre acom-panyat, recolzat, estimat. Per això, farem un petit sorteig amb els noms de tots els monitors i monitores i a cadascú li tocarà un dels seus companys. 

        Fet el sorteig, serà responsabilitat de cadascú que l’altre el senti a prop durant tot el curs. No cal que l’altra persona sàpiga que ell o ella era la persona que tenia al paper, malgrat que en funció de les accions que fem al llarg del curs és molt probable que ho esbrini. 
        
        El responsable pot anar donant alguna idea de com cuidar els altres. Alguns exemples de coses que podem fer per un altre company:
        
        Quan el veiem, preguntar-li com està, xerrar, veure si té alguna inquietud o neguit, alguna necessitat dins o fora de l’esplai.
        Per Nadal, fer-li una postal i enviar-li a casa o donar-li en mà.
        Alguns matins o nits, enviar-li un Whatsapp amb una imatge i una frase per a reflexionar, per animar, per cuidar.
        A la reunió de monitors, seure al seu costat.
        Proposar-li un dia anar a fer una excursió a la muntanya.
        Pel seu aniversari, fer-li un regal especial al voltant de la figura del monitor o del seu paper important a l’esplai. 
        Són moltes les idees que el responsable pot suggerir per ajudar a cada monitor en aquesta tasca.`,
    avaluació: `Al final del curs, avaluarem amb l’equip de monitors com s’han sentit, si han vist interessant la iniciativa i si la repetirien el curs següent.`,
    etiquetes: ["Grans jocs", "Exterior", "Interior"],
    isFavorite: false,
  },
  {
    id: 78,
    title: `“Piulades” per canviar el món! `,
    descripció: `Dinàmica per crear un debat crític entre els joves sobre temes desconeguts que haurien de ser d’interès social i malauradament no ho són.`,
    participantsmin: 1,
    participantsmax: 50,
    edatmin: 12,
    edatmax: 18,
    durada: "En funció dels participants",
    objectiusMoni: (
      <div>
        <ul>
          <li>
            · Conduir la gestació de la reflexió sobre un tema en concret.
          </li>
          <li>· Gestionar situacions complicades en diferents àmbits. </li>
          <li>· Observar i identificar el pensament del grup.</li>
        </ul>
      </div>
    ),
    objectiusInf: (
      <div>
        <ul>
          <li>
            ·Generar un espai de reflexió i de respecte entre els companys.
          </li>
          <li>
            ·Expressar lliurement i de forma constructiva les seves opinions.{" "}
          </li>
        </ul>
      </div>
    ),
    material: `Notícies sobre les quals reflexionar, bolígrafs i post-its per cada participants, núvol de cartolina on enganxar les "piulades" o reflexions `,
    introducció: `Així com Internet és un espai on es comparteixen pensaments personals, nosaltres, des de les responsabilitats que tenim, hem de reflexionar i lluitar en la construcció d’un futur millor per a tothom. Totes les nostres idees, si són constructives, són igual d’importants, totes poden millorar la nostra societat.`,
    desenvolupament: `Un cop reunit el grup es llegirà una notícia d’actualitat i de poca ressonància; una notícia que per diversos motius no ha tingut gaire espai als mitjans de comunicació.

    Feta la lectura de la notícia s’obrirà un debat (dinamitzat pel monitor/a) comentant certs aspectes d’aquesta. La conclusió a la que voldríem arribar seria que som nosaltres els qui hem de canviar el món i que les nostres inquietuds i idees no ens les hem de quedar per nosaltres, sinó que les hem de compartir.
    
    Com es comparteixen les idees avui? A través d’Internet. El millor exemple és el Twitter. Per tant, la dinàmica consistirà en repartir a cada jove un bolígraf i un post-it on hi podrà reflectir la seva conclusió personal, en un màxim de 140 caràcters: amb el seu missatge, idea, compromís per canviar i millorar el nostre món, etc.  `,
    avaluació: `Finalitzarem la dinàmica tot compartint les nostres reflexions finals i enganxant els post-its a un núvol. El núvol simbolitza Internet, el missatge una piulada.`,
    etiquetes: ["Interior", "Vetllades"],
  },
  {
    id: 79,
    title: `Xicpoly`,
    descripció: `Joc de taula formatiu`,
    participantsmin: 2,
    participantsmax: 8,
    edatmin: 18,
    edatmax: 18,
    durada: "1 hora",
    objectius: (
      <div>
        <ul>
          <li>· Conscienciar-se de les tasques i/o comissions d’un esplai.</li>
          <li>
            · Conèixer les responsabilitats que comporten les comissions.{" "}
          </li>
          <li>· Avaluar el temps dedicat a les tasques de les comissions.</li>
        </ul>
      </div>
    ),
    material: `Taulell, 2 daus, bitllets temporals, targetes de joc del Xicpoly`,
    introducció: `Les tirades, els torns, l’intercanvi de temps i els daus ballant la dansa de l’atzar ens duran a les entranyes del nostre esplai. Cada casella representa l’esforç d’algun dels jugadors que sent com la seva tasca es menysprea. Cada comissió representa un dels pilars organitzatius de l’esplai que es veu trontollar per la seva poca eficàcia. Val la pena mantenir-la? Cada hora, cada minut que heu dedicat a l’esplai prendrà forma i sentit. A partir d’ara, tot pot canviar, tot pot millorar... T’atreveixes a llançar els daus?`,
    desenvolupament: `El "Xicpoly" és un joc de taula on es troben les principals comissions en què s'organitza un centre d'esplai i les tasques més importants que desenvolupen. L'objectiu lúdic del joc és ser el responsable del màxim nombre de comissions possible i veure, d'aquesta forma, el temps que ens va ocupant. Els monitors de l'esplai també hi juguen un paper molt important, ja que, sense ells, el rellotge del temps se'ns cruspirà inexorablement.

    Tots els participants tiren un dau; aquell que tregui una major puntuació començarà el joc i se seguirà en sentit horari. A partir de la casella de sortida es mouen les fitxes al voltant del taulell d’acord amb la puntuació treta en una tirada de dos daus. Depenent de la casella on vagi a parar el jugador, aquest tindrà dret a adquirir una tasca de comissió, un monitor, a destinar temps a la tasca de la comissió que pertany a un altre jugador, assistir a trobades imprevistes o agafar una carta de “xic o no xic”.
    
    Al llarg de la partida els monitors avaluen l’estat de les comissions així com les tasques que han desenvolupat o que resten pendents. Durant el transcurs de les tirades de ben segur que surten comentaris sobre el rendiment personal dels monitors, directors, etc. És un bon moment per parlar de les necessitats que aquests tenen i com l’esplai, o la resta de companys, els poden ajudar. Per a aquells que siguin nouvinguts, a mesura que s’avança en el joc, convé anar explicant en què consisteixen les comissions, quines són les seves principals fites, consells per tirar-les endavant, incentivar-los perquè aportin noves idees...`,
    avaluació: `La lectura que pot fer-se del joc dependrà molt del grau d’implicació dels seus participants, ja que el procés d’avaluació del Xicpoly és l’autoretrat de la situació de l’esplai en el moment de la partida, dibuixat per tothom amb les opinions de tots.`,
    etiquetes: ["Interior"],
  },
  {
    id: 80,
    title: `Torre de Hanoi`,
    descripció: `La Torre de Hanoi és un joc de concentració i estratègia inventat pel matemàtic francès Éduard Lucas l'any 1833, tot i que el joc està envoltat per una llegenda molt més màgica situada a l'Antic Orient.`,
    participantsmin: 1,
    participantsmax: 2,
    edatmin: 12,
    edatmax: 18,
    durada: "Depén jugadors/discos",
    objectius: (
      <div>
        <ul>
          <li>· Millorar la concentració.</li>
          <li>· Desenvolupar l'estratègia. </li>
          <li>· Aprendre a partir de l'assaig i l'error.</li>
        </ul>
      </div>
    ),
    material: `El joc de la torre de Hanoi`,
    introducció: `El tauler de joc consta d'una base rectangular amb tres columnes que hi surten perpendicularment. També necessitarem discos de diferents diàmetres amb un forat al centre. El joc es comença tenint tots els discos inserits en una de les dues columnes dels extrems, ordenant-los de dalt a baix de petit a gran. El nombre de discos amb els quals juguem serà el factor que augmentarà la dificultat del joc (a major nombre de discos la dificultat serà més gran).`,
    desenvolupament: `L'objectiu final del joc és tenir col·locats tots els discos en la columna de l'altre extrem. Per fer-ho es poden utilitzar les tres columnes.
    Per començar a jugar, el participant ha de moure els discos d'un en un, respectant sempre una regla bàsica: mai un disc de diàmetre superior podrà estar a sobre d'un de diàmetre inferior. És a dir, un disc més gran mai no podrà estar a sobre d'un de més petit, deixant de banda la columna on estiguin.
    El joc s'acaba quan els discos estan en la columna oposada ordenats de dalt a baix de petit a gran, com en la situació inicial.`,
    avaluació: `És aconsellable començar a jugar amb tres discos i anar augmentant-ne el nombre a mesura que anem superant el joc. La fórmula matemàtica per saber quin nombre de moviments es requereixen (si no ens equivoquem mai, és clar) és molt senzilla: 2^n-1 (n= nombre de discos). Així, si juguem amb 4 discos, el nombre de moviments és 15 (2^4-1= 15). `,
    etiquetes: ["Interior"],
  },
  {
    id: 81,
    title: `La cursa del conte`,
    descripció: `L’objectiu d’aquesta activitat és que els infants s’apropin i coneguin els personatges d’alguna història que vulguem treballar tot divertint-se, ja que s’hauran de moure i competir entre ells.`,
    participantsmin: 4,
    participantsmax: 50,
    edatmin: 4,
    edatmax: 11,
    durada: "Depén participants/text",
    objectius: (
      <div>
        <ul>
          <li>· Treballar en equip.</li>
          <li>· Conèixer els personatges d’una història. </li>
          <li>·Interessar-se per una lectura en concret.</li>
          <li>· Cohesionar el grup.</li>
          <li>· Desenvolupar la capacitat d’atenció. </li>
        </ul>
      </div>
    ),
    material: `El text d’un conte on apareguin diferents personatges, el nom dels quals es repeteix de forma reiterativa.`,
    introducció: `Aquest joc és una competició on guanyarà aquell qui aconsegueixi primer descartar-se de totes les cartes que li han estat assignades.`,
    desenvolupament: `Els infants seuen en rotllana. Acte seguit, es reparteixen entre els participants quatre targetes on hi ha el dibuix o la foto d’algun dels protagonistes. Cal que es facin fitxes repetides, però a l’hora de repartir-les cap participant no pot tenir-ne dues d’iguals.

    Es comença a llegir un text escrit especialment per a l’ocasió i quan un infant sent el nom del personatge que li ha estat assignat ha de córrer a deixar la targeta corresponent al centre de la rotllana. Com que hi ha participants que tenen la mateixa fitxa, el primer participant que la deixi serà el que podrà descartar-se d’aquella fitxa. Els altres hauran de tornar a seure amb la fitxa que no han pogut deixar al cercle.
    
    Es segueix llegint el text, i els participants aniran desfent-se de les seves targetes. El primer participant que aconsegueixi desprendre’s de totes guanya. Es pot acordar que hi hagi un segon jugador, o bé un tercer. O també, per tal d’incloure-hi a tothom, es pot acabar el joc quan tots els jugadors s’hagin quedat sense targetes.`,
    avaluació: `Com que es tracta d’una activitat col·lectiva, és força recomanable que hi participi com més gent millor. És important que els participants tinguin respecte pels seus companys, ja que si no es poden acabar fent mal, i que desenvolupin l’activitat en silenci per tal de poder sentir la veu del narrador.

    És interessant que en acabar l’activitat es repassi amb els infants quins personatges els han estat assignats i quin paper juguen dins la història narrada. Si la història es llegeix a posteriori, se’ls hi pot introduir explicant-los què representen els personatges dins la història que llegiran. 
    
    L'espai ha de ser suficientment ampli per tal que tots els participants hi càpiguen asseguts en rotllana.`,
    etiquetes: ["Interior", "Narració i expressió"],
  },
  {
    id: 82,
    title: `El Passaparaula de les qualitats`,
    descripció: `En aquest joc buscarem que els infants pensin aspectes positius d’un mateix i fomentarem la col•laboració entre ells.`,
    participantsmin: 2,
    participantsmax: 5,
    edatmin: 12,
    edatmax: 18,
    durada: "15 mins",
    objectius: (
      <div>
        <ul>
          <li>· Afavorir l’autoconeixement dels infants.</li>
          <li>· Incrementar l’autoestima personal. </li>
          <li>
            ·Centrar el pensament en aspectes positius de la pròpia persona i
            els altres.
          </li>
          <li>· Generar relacions positives entre els infants.</li>
          <li>· Divertir-se! </li>
        </ul>
      </div>
    ),
    material: `Papers i retoladors i/o bolígrafs.`,
    introducció: `Repartirem els fulls i bolígrafs o retoladors als infants i els demanarem que agafin les lletres del seu nom i primer cognom i en facin un cercle, a mode del programa de televisió “Pasapalabra”.`,
    desenvolupament: `Començarà un dels infants i haurà de pensar i apuntar una qualitat pròpia i real per a cadascuna de les lletres del seu cercle. Quan no n’hi vingui cap en ment podrà demanar “Passaparaula”, perquè continuï el següent company. Així es van fent rondes fins que cadascú acaba completant el seu cercle. No es poden repetir qualitats ni en un mateix ni entre infants. Els educadors haurem de fomentar que s’ajudin entre ells. Guanya el primer que acaba el cercle.`,
    avaluació: `Tot i ser una activitat competitiva, el fet que cada infant tingui més o menys lletres en el seu nom i que es puguin ajudar entre ells, fa que puguem relativitzar aquest fet i convertir-la en un joc més aviat de foment de la col·laboració.

    En acabar, preguntarem als nens i nenes si els ha agradat pensar aspectes positius sobre un mateix, si els ha estat fàcil pensar-ne o bé els ha costat i demanarem per què creuen que ha estat així. També podem preguntar si els ha estat més fàcil pensar en qualitats pròpies o dels demés, i si han descobert, amb l’ajuda dels seus companys, nous aspectes d’un mateix que desconeixien.`,
    etiquetes: ["Interior"],
  },
  {
    id: 83,
    title: `I tu, com la imagines ?`,
    descripció: `Es tracta d'expressar els sentiments que genera la pèrdua d'un ésser estimat de manera artística i generar un espai per poder-ne parlar.`,
    participantsmin: 1,
    participantsmax: 50,
    edatmin: 4,
    edatmax: 18,
    durada: "1h-1h30",
    objectius: (
      <div>
        <ul>
          <li>· Reflexionar sobre la mort.</li>
          <li>· Prendre consciència de la universalitat de la mort. </li>
          <li>
            · Ajudar a expressar el dol que sentim o hem sentit en alguna
            ocasió.
          </li>
          <li>· Practicar l'escolta activa.</li>
        </ul>
      </div>
    ),
    material: `Paper d'embalar, colors, retoladors, pintures`,
    introducció: `La mort és un tema difícil de treballar perquè ens genera un seguit d'emocions i pensaments que no són senzills de gestionar i requereixen el seu temps; no hi ha respostes segures i racionals sobre aquest tema i això ens genera por i incertesa.

    Hem de tenir present que hi ha una gran varietat de creences sobre la mort (sovint associades a creences religioses) i que és important respectar el que l'entorn de l'infant o adolescent cregui. Això no treu que puguem treballar el tema de la mort, i que si ens fan preguntes puguem respondre, sempre amb honestedat, el que nosaltres creiem.`,
    desenvolupament: `Col·locarem un tros llarg de paper d'embalar al terra i donarem material per a poder pintar. Hauran de dibuixar com s'imaginen què és la mort. Deixarem l'estona necessària en funció del grup. Cal cuidar aquest moment; podem posar música ambient per ajudar a crear un clima de reflexió ja que l'activitat requereix de certa introspecció.`,
    avaluació: `Després farem una roda per explicar-los. Cal respectar els temps de cada persona. És important no donar opció a rèpliques per evitar debats. En aquesta explicació del dibuix la persona podrà expressar tot allò que tingui necessitat d'expressar: els sentiments, dubtes, o senzillament parlar d'una persona estimada que hagi perdut. Mentre un s'explica, els altres escolten atentament i acollim el que la persona ens explica.`,
    etiquetes: ["Interior", "Narració i expressió"],
  },
  {
    id: 84,
    title: `El bully`,
    descripció: `Joc grupal on es reparteixen personatges i d’on sortiran situacions extrapolables a un cas d’assetjament.`,
    participantsmin: 8,
    participantsmax: 20,
    edatmin: 9,
    edatmax: 18,
    durada: "30 mins",
    objectiusMoni: (
      <div>
        <ul>
          <li>
            · Conèixer les creences, tendències i actituds dels participants.
          </li>
          <li>
            · Generar un espai d’anàlisi sobre les relacions interpersonals.{" "}
          </li>
          <li>· Sensibilitzar sobre l’assetjament entre iguals.</li>
        </ul>
      </div>
    ),
    objectiusInf: (
      <div>
        <ul>
          <li>
            · Entrenar les habilitats de resposta davant de possibles
            agressions.
          </li>
          <li>· Comprendre tots els implicats en un tema d’assetjament.</li>
          <li>· Qüestionar actituds i rols en les relacions entre iguals.</li>
        </ul>
      </div>
    ),
    material: `Un joc de cartes (2 cartes per participant). També es poden fer servir papers, o cigrons...`,
    introducció: `Millor no canviar el nom als personatges ni dir la paraula “bullying” prèviament, per tal de no convertir l’assetjament en un joc. Ja farem la transferència acabat el joc.`,
    desenvolupament: `Els jugadors s’asseuen en rotllana. Es reparteixen dues vides per cadascú (cartes o cigrons) i el monitor dirà a cau d’orella els personatges:

    1 Vampir,
    1 Àngel,
    1 Detectiu,
    La resta són poble en un inici.
    L’objectiu del vampir és eliminar el màxim de participants sense ser descobert. Elimina (treu una vida) picant l’ullet. Cada cop que un membre del poble perd una vida ho ha de dir, si es perden les dues vides quedes eliminat. El joc s’acaba quan el detectiu (no perd vides mai) descobreix qui és el vampir.
    
    L’àngel fa recuperar una vida fent el gest del petó amb els llavis. El vampir també pot retornar una vida, convertint algú en vampir còmplice. Ho farà traient la llengua (si vol pot tornar a eliminar-los).
    
    Els còmplices també poden eliminar vides picant l’ullet, però no poden fer nous còmplices. Entre ells es poden treure vides (segurament no ho faran), però mai al vampir original. Si el detectiu encerta un còmplice, aquest ho ha de reconèixer, dir que no és l’original i deixar de fer aquest rol, encara que continua en el joc.`,
    avaluació: `Seurem amb el grup per analitzar com ens hem sentit, què ha passat i l’estratègia de cadascú. Respecteu les normes d’aquesta adaptació, per tal de poder-ho extrapolar a situacions de bullying, i fer-ho donant un missatge adequat. Per un bon aprofitament de la dinàmica, podeu ampliar la informació amb els articles i els recursos del Centre d’Interès.`,
    etiquetes: ["Interior"],
  },
  {
    id: 85,
    title: `El petit món`,
    descripció: `Gràcies a les noves tecnologies podem afirmar que la globalització resulta un fenomen cada vegada més palpable. Ens permet viatjar a qualsevol part del món. Més enllà de les xarxes socials, resulta un recurs interminable per satisfer totes les nostres curiositats i l’hem d’aprendre a exprimir amb els nens i joves.`,
    participantsmin: 8,
    participantsmax: 12,
    edatmin: 9,
    edatmax: 15,
    durada: "2 hores",
    objectiusMoni: (
      <div>
        <ul>
          <li>· Gestionar l’ús de les TIC en el lleure.</li>
        </ul>
      </div>
    ),
    objectiusInf: (
      <div>
        <ul>
          <li>· Desenvolupar la curiositat per conèixer altres realitats.</li>
          <li>· Treballar en equip amb un objectiu comú.</li>
        </ul>
      </div>
    ),
    material: `Mapa del món,
    llana de colors,
    cinta adhesiva,
    fulls de colors,
    retoladors,
    targetes (temes i llocs),
    telèfon,
    ordinador,
    tauleta amb connexió a Internet (tantes com grups)`,
    introducció: `Per a la realització d’aquesta activitat, prèviament, hem d’escollir els temes que volem tractar (escola, menjar, roba, música...) i les regions que volem treballar. Així doncs, per a cada tema i regió crearem una targeta.`,
    desenvolupament: `Per començar l’activitat, dividirem els participants en grups (tants com monitors, ja que cada grup serà guiat per un monitor). 

    L’activitat es desenvoluparà en diferents rondes d’investigació (tantes com temes). Per iniciar cada ronda s’agafarà a l’atzar un dels temes, al mateix temps que s’assigna una regió a cada grup. 
    
    Cada grup ha de cercar la màxima informació possible (a la xarxa) sobre la regió i el tema que li ha tocat per tal de confeccionar una targeta informativa. 
    
    Una vegada acabada cada ronda, el grup explicarà a la resta què han descobert tot penjant la targeta informativa sobre la regió al mapa. I creant un teranyina de llana (un color per tema) que uneixi les diferents regions.`,
    avaluació: `Posada en comú de les diferències i igualtats dels temes tractats a cada regió.`,
    etiquetes: ["Interior"],
  },
  {
    id: 86,
    title: `Pintem emocions`,
    descripció: `Els nens elaboraran el seu particular arc de Sant Martí de les emocions.`,
    participantsmin: 1,
    participantsmax: 50,
    edatmin: 16,
    edatmax: 18,
    durada: "1h30",
    objectiusMoni: (
      <div>
        <ul>
          <li>
            · Ajudar a desenvolupar la competència emocional dels infants.
          </li>
          <li>
            · Acompanyar els infants al llarg del seu itinerari emocional.
          </li>
        </ul>
      </div>
    ),
    objectiusInf: (
      <div>
        <ul>
          <li>· Adquirir un bon coneixement de les pròpies emocions.</li>
          <li>· Aprendre a identificar les emocions dels altres.</li>
          <li>· Ampliar el seu vocabulari d’emocions.</li>
        </ul>
      </div>
    ),
    material: `Paper de mural, pintures i ceres de tots els colors`,
    introducció: `Es demanarà a cada nen que triï els seus tres colors preferits. En un paper hauran d’explicar, utilitzant un d’aquests colors, perquè són els colors que més li agraden. De la figura en sortiran tantes fletxes com emocions hem relacionat amb aquest color i escriurem el nom d’aquestes emocions. 

    Una vegada tinguem totes les emocions recollides es proposarà als nens realitzar un mural abstracte que representi el nostre propi arc de Sant Martí de les emocions.`,
    desenvolupament: `Cada nen haurà d’explicar a la resta de companys i monitors quin són els colors que ha triat i amb quines emocions els relacionen. Seria molt interessant que els monitors també poguessin explicar quins colors han triat per tal de poder ampliar el llistat d’emocions que vagin apareixent. Així, es posarà de manifest el gran ventall d’emocions que existeixen i la importància de reconèixer tant les pròpies emocions com les de la resta de companys. També es dibuixaran diferents figures geomètriques al mural que pintarem. Entre tots es triarà un títol per posar a la composició artística. El mural quedarà exposat al centre.`,
    avaluació: `Al finalitzar l’activitat es realitzarà una petita dinàmica per tal que els infants s’adonin de quines emocions es poden relacionar.`,
    etiquetes: ["Interior"],
  },
  {
    id: 87,
    title: `Els rols i les tasques`,
    descripció: `Dinàmica per a reflexionar sobre les diferents tasques i rols que podem desenvolupar a l’esplai.`,
    participantsmin: 8,
    participantsmax: 12,
    edatmin: 16,
    edatmax: 18,
    durada: "30 mins/1h",
    objectius: (
      <div>
        <ul>
          <li>· Experimentar una activitat a partir d’un rol imposat.</li>
          <li>
            · Conèixer els diferents tipus de rol de tasques que es poden donar
            dins del grup d’educadors.
          </li>
          <li>· Reflexionar sobre un mateix i la vivència viscuda.</li>
          <li>
            · Exterioritzar sentiments i expressar-los de manera assertiva.
          </li>
        </ul>
      </div>
    ),
    material: `Una taula per grup, 2 fulards per cada grup de 4 persones, tantes cadires com monitors hi hagi, peces de construcció de diferents formes i colors de cada grup`,
    introducció: `Dinàmica per treballar les diferents tasques que pot desenvolupar una persona dins d’un equip i com n’és d’important cada persona ja que totes les tasques són complementàries. Conèixer-les fa que puguem sentir empatia cap a les persones que desenvolupen aquestes feines.`,
    desenvolupament: `Situem els monitors en grups de 4 en una taula de manera que tots ells es puguin veure. Al mig de la taula posem les peces de construcció de diferents formes i colors. 

    Repartim els rols: 1 observador que mira i apunta, no pot intervenir ni parlar; 1 director que dirigeix la feina, només pot parlar, no pot ajudar ni intervenir; 2 constructors que porten els ulls tapats i només poden utilitzar una de les dues mans. 
    
    Un cop repartits els rols direm als membres dels diferents grups que tenen 2-5 minuts per a construir una torre. Guanya l’equip que aconsegueixi fer la torre més alta en el temps que haguem pactat. Acabat el temps mirem quin equip ha aconseguit fer la torre més alta i analitzem com ha estat la vivència.`,
    avaluació: `Algunes preguntes per a l’avaluació de la dinàmica són: 

    Com s’han sentit els membres de cada equip? 
    És fàcil fer d’observador i prou?
    Què passa quan hem d’adaptar la nostra manera de treballar, pel motiu que sigui? 
    És fàcil donar indicacions de treball a més d’una persona al mateix temps? Què passa amb la comunicació? Com ho podem millorar? 
    Què és més important, el resultat o com s’hi ha arribat? 
    La dinàmica es pot utilitzar per a treballar diferents temes; depèn dels objectius que es vulguin treballar dins del grup. 
    Finalment, cal tenir en compte que:
    
    Al final de la dinàmica podem pensar en quines són les destreses de cadascun dels membres de l’equip per a veure quines són les tasques que millor poden desenvolupar dins de l’entitat. 
    Durant la dinàmica observarem com es relacionen els monitors entre ells i què els suposa més difícil de fer i això ens servirà per veure quina mena d’acompanyament hem de fer a cadascun d’ells. 
    És molt important treballar l’empatia i el respecte en tot moment i no anar amb pressa.
    Durant la reflexió que fem amb els monitors és molt important fer èmfasi en el treball en equip i recordar tot allò que faci referència a la planificació de la feina.`,
    etiquetes: ["Interior"],
  },
  {
    id: 88,
    title: `La bústia de les consultes`,
    descripció: `Aquesta dinàmica és una bona eina que pot utilitzar el responsable de l’esplai per a involucrar tot l’equip de monitors en la presa de decisions i per establir criteris d’actuació per a futures situacions en les quals ens podem trobar en el dia a dia de l’esplai.`,
    participantsmin: 2,
    participantsmax: 10,
    edatmin: 18,
    edatmax: 18,
    durada: "1h",
    objectius: (
      <div>
        <ul>
          <li>· Treballar la presa de decisions en equip.</li>
          <li>
            · Gestionar situacions complicades en diferents àmbits de l’esplai.
          </li>
          <li>· Enfortir la relació dels membres de l’equip de monitors.</li>
        </ul>
      </div>
    ),
    material: `Smartphone o reproductor d'àudio, pissarra`,
    introducció: `El responsable prepararà un seguit de missatges d’àudio emesos, suposadament, per monitors d’altres esplais. A cada àudio el monitor o monitora (fictici) exposarà una situació complicada amb què s’han trobat al seu esplai, i ens demanarà ajuda per resoldre-la o opinar sobre com caldria actuar.`,
    desenvolupament: `Alguns exemples de situacions que poden contenir els missatges: 

    Hi ha hagut una intoxicació a les colònies i cal decidir si es comunica de manera immediata als pares i mares, si es fa a la tornada i de quina manera.
    Dos monitors han arribat a les mans durant una reunió i cal decidir com actuar amb ells.
    Un monitor ha anat a una reunió de la parròquia i ha exposat una idea que no coincidia amb allò que s’havia acordat al consell de monitors. 
    Durant la dinàmica, els monitors aniran escoltant els missatges, que poden haver arribat, per exemple, via WhatsApp al mòbil de l’esplai, i comentaran en grup cada situació per arribar a una decisió de grup que els sembli la més adequada. 
    
    El resposable anirà guiant l’activitat i observant la veu de tots els monitors, els rols que s’estableixen i les decisions finals a les quals s’arriba.`,
    avaluació: `Al final de l’activitat, el responsable valorarà les decisions preses i relacionarà cada resposta amb aspectes relacionats amb el projecte educatiu de l’esplai, per donar coherència a tots els criteris i decisions que han resultat de les situacions exposades.`,
    etiquetes: ["Interior"],
  },
  {
    id: 89,
    title: `Veritat o fals?`,
    descripció: `Dinàmica de coneixement dels membres del grup.`,
    participantsmin: 1,
    participantsmax: 20,
    edatmin: 9,
    edatmax: 18,
    durada: "1h",
    objectiusMoni: (
      <div>
        <ul>
          <li>· Conèixer millor als infants del grup.</li>
          <li>· Potenciar l’autoconeixement dels infants.</li>
          <li>· Estimular les relacions entre els membres del grup.</li>
        </ul>
      </div>
    ),
    objectiusInf: (
      <div>
        <ul>
          <li>
            · Motivar les relacions interpersonals entre els membres del grup.
          </li>
          <li>· Aprendre a mostrar interès per la resta de components.</li>
          <li>· Potenciar l’autoconeixement.</li>
        </ul>
      </div>
    ),
    material: `Fulls i bolígrafs`,
    introducció: `Cada infant, de manera individual, haurà d’escriure en un paper cinc aspectes que el poden definir. Aquests poden ser gustos, activitats que els agrada realitzar, manies, somnis... D’aquest llistat d’aspectes, tres hauran de ser verdaders i dos falsos.`,
    desenvolupament: `En petits grups, els infants hauran de posar en comú el llistat de trets que han escrit sobre ells mateixos per tal que la resta d’infants els puguin conèixer millor. La resta hauran d’identificar quines són les dues coses que són falses i explicar el per què ho creuen. Per finalitzar la dinàmica, cada infant haurà d’explicar al gran grup dues coses que hagi descobert dels companys que abans desconeixia i li hagi agradat saber.`,
    avaluació: `Per finalitzar la dinàmica, el grup d’educadors realitzaran una reflexió al voltant de la importància de mostrar interès per tots els infants del grup i mitjançat un mural es recolliran totes les qualitats positives que haguem descobert dels demés. Entre tots es decidirà el títol d’aquest mural.`,
    etiquetes: ["Interior"],
  },
  {
    id: 90,
    title: `Tu també tens por ?`,
    descripció: `Dinàmica de grup per fer front a les pors individuals.`,
    participantsmin: 1,
    participantsmax: 20,
    edatmin: 9,
    edatmax: 15,
    durada: "1h30",
    objectiusMoni: (
      <div>
        <ul>
          <li>
            · Identificar les principals pors que pateixen els infants del grup.
          </li>
          <li>· Ajudar els infants a identificar les seves pors.</li>
          <li>· Afavorir l’empatia entre els membres del grup.</li>
        </ul>
      </div>
    ),
    objectiusInf: (
      <div>
        <ul>
          <li>· Aprendre a identificar les pròpies pors.</li>
          <li>· Potenciar l’autoconeixement.</li>
          <li>· Desenvolupar estratègies per poder fer front a les pors.</li>
        </ul>
      </div>
    ),
    material: `Fulls blancs, bolígrafs, cartolines de colors i retoladors.`,
    introducció: `Cada infant haurà d’escriure en un paper alguna situació o alguna cosa que li produeixi incertesa o por.`,
    desenvolupament: `Després, els papers es posaran en una pila i s’aniran llegint d’un en un. Mai es dirà la persona que ha escrit el missatge (si no ho fa de forma voluntària) i entre tots es buscaran possibles solucions per poder superar aquesta por. Per realitzar el tancament de la sessió, cada infant haurà d’escriure en una cartolina una frase que expressi què és per a ell o ella la valentia. Aquestes frases quedaran enganxades en algun suro del centre.`,
    avaluació: `Per finalitzar la dinàmica, el grup d’educadors realitzaran una reflexió al voltant de les pors. L’objectiu de la reflexió és que tots els infants entenguin que tothom té alguna por i que aquestes es poden superar sent conscients que es pot demanar ajuda.`,
    etiquetes: ["Interior"],
  },
  {
    id: 91,
    title: `Què consumeixo ?`,
    descripció: `Dinàmica per a la reflexió del consum responsable i/o l’ús dels telèfons mòbils en la societat actual.`,
    participantsmin: 10,
    participantsmax: 30,
    edatmin: 16,
    edatmax: 18,
    durada: "45 mins",
    objectiusMoni: (
      <div>
        <ul>
          <li>· Generar un espai de reflexió sobre el consum responsable.</li>
          <li>· Mostrar les noves tecnologies com eines d’aprenentatge.</li>
          <li>· Promoure l’intercanvi d’opinions i la generació de debat. </li>
        </ul>
      </div>
    ),
    objectiusInf: (
      <div>
        <ul>
          <li>· Qüestionar l’origen de les pròpies opinions i/o interessos.</li>
          <li>
            · Ser conscient de com ens influencien altres agents i els mitjans
            de comunicació.
          </li>
          <li>· Conèixer alternatives per consumir de forma responsable.</li>
        </ul>
      </div>
    ),
    material: `Projector, telèfons mòbils (un per participants aprox.), connexió a internet`,
    introducció: `Fins a quin punt estem influenciats a l’hora de comprar? Amb aquesta dinàmica volem que els i les joves reflexionin sobre el consum i la influència de l’entorn en les seves decisions. El mètode que utilitzarem és l’aplicació de mòbil o lloc web Kahoot, que permet crear enquestes multiresposta i observar els resultats amb un gràfic (els podem projectar). Els joves hi participaran amb el codi generat per a cadac enquesta.`,
    desenvolupament: `Un personatge demanarà ajuda als/les joves perquè té molts diners i no sap què comprar, diu que necessita moltes coses (joies, roba, mòbil…). Es farà una enquesta de Kahoot per cada element que vulgui comprar el/la protagonista, on les opcions seran diversos models de cada objecte (Ex. Mòbil - Opcions: Iphone, Samsung…). El/la protagonista es comprarà aquells productes que hagin estat més votats pels participants.

    La motivació cal que sigui molt atractiva perquè els/les joves ajudin al/la protagonista a comprar compulsivament.`,
    avaluació: `El personatge no se sentirà bé amb tot allò adquirit, no ho necessita realment. Reflexionarem amb els/les joves sobre els productes que consumeixen habitualment, el seu origen (qui els fa, on els fa, quins materials utilitza...) i les conseqüències humanes, econòmiques i mediambientals que té la seva producció, així com quines alternatives podem utilitzar per a un consum responsable (Ex. Fairphone).`,
    etiquetes: ["Interior"],
  },
  {
    id: 92,
    title: `El semàfor dels tweets`,
    descripció: `En aquesta dinàmica analitzarem un conjunt de piulades sobre diferents notícies i haurem de valorar el seu grau informatiu i de credibilitat.`,
    participantsmin: 1,
    participantsmax: 50,
    edatmin: 12,
    edatmax: 18,
    durada: "30-45 mins",
    objectiusMoni: (
      <div>
        <ul>
          <li>· Fomentar la participació i motivació entre els joves.</li>
          <li>· Ser capaç de moderar el debat final de la dinàmica.</li>
          <li>· Cohesionar el grup de joves.</li>
        </ul>
      </div>
    ),
    objectiusInf: (
      <div>
        <ul>
          <li>· Potenciar l’esperit crític vers les xarxes socials.</li>
          <li>
            · Descobrir que la informació de les xarxes pot estar molt
            manipulada.
          </li>
          <li>· Millorar la presa de decisions.</li>
          <li>· Reflexionar sobre la pròpia conducta.</li>
          <li>· Millorar l’expressió oral i escrita.</li>
        </ul>
      </div>
    ),
    material: `Cartolines vermelles, taronges i verdes, folis, llapis, cola.`,
    introducció: `En aquesta dinàmica pretenem fomentar l’esperit crític vers les xarxes socials decidint el grau de credibilitat, informació i veracitat, de diferents tuits referents a diverses notícies. Primer, dividirem els joves en grups de tres. A cada grup li donarem una cartolina dinA4 vermella, una taronja i una verda. Un cop estigui tot repartit, el monitor llegirà dues notícies reals.`,
    desenvolupament: `Un cop llegides, els diferents grups hauran d’inventar-se 6 tuits que enganxaran a les diferents cartolines depenent del grau de credibilitat, informació i veracitat que li donen. A cada cartolina hi han d’anar 2 tuits diferents, un de cada notícia llegida, entenent que la vermella representa els tuits “dolents”, la taronja els tuits “a la corda fluixa” i la verda, aquells tuits que considerem adequats dins del món de la comunicació i la informació.`,
    avaluació: `Avaluar qué és allò que consideren "correcte" o "no correcte"`,
    etiquetes: ["Interior"],
  },
  {
    id: 93,
    title: `Informació o desinformació?`,
    descripció: `Reflexió sobre la informació que rebem cada dia a través de la xarxa i la seva credibilitat.`,
    participantsmin: 1,
    participantsmax: 30,
    edatmin: 16,
    edatmax: 18,
    durada: "1 hora",
    objectiusMoni: (
      <div>
        <ul>
          <li>· Ajudar a desenvolupar l’esperit crític dels joves.</li>
          <li>
            · Mostrar la importància de conèixer les fonts d’una informació.
          </li>
          <li>
            · Mostrar la capacitat d’influència dels mitjans de comunicació.{" "}
          </li>
        </ul>
      </div>
    ),
    objectiusInf: (
      <div>
        <ul>
          <li>· Desenvolupar l’esperit crític.</li>
          <li>· Conèixer exemples de desinformació a la xarxa.</li>
        </ul>
      </div>
    ),
    material: `Notícies d'exemple, papers, bolígrafs, rotuladors`,
    introducció: `Aquesta dinàmica vol mostrar als joves la importància d’analitzar i contrastar la informació que cada dia rebem a través dels mitjans de comunicació, internet o xarxes socials.`,
    desenvolupament: `Els joves arribaran a una sala plena d’informació. A la taula central o en un mural podran veure titulars i notícies completes aparegudes en mitjans de comunicació i xarxes socials en els darrers anys. 

    En primer lloc, el grup haurà de posar-se d’acord per separar les informacions que consideren reals i les que són falses. Un cop fet aquest primer anàlisi, disposaran d’uns 10-15 minuts més per poder consultar a la xarxa i contrastar les informacions mitjançant els seus dispositius mòbils o un ordinador/tablet facilitat per l’esplai/cau. 
    
    Amb la classificació final feta pels joves, els monitors acabaran de situar cada notícia a la banda de cert/fals. 
    
    Amb aquest primer exercici, els joves podran veure com la xarxa i els mitjans compten amb molta informació que, en molts casos, no és real, i que som nosaltres com a usuaris qui hem d’analitzar i comptar amb l’esperit crític necessari per saber com ens estem informant. 
    
    Com a segona dinàmica, tots els joves consensuaran un tema o notícia sobre la qual tinguin informació. Ara seran ells els redactors, i hauran de fer un petit text amb el contingut que coneixen d’aquell tema. Un cop finalitzat, llegirem totes les peces per observar que, malgrat ser una qüestió que tots coneixen, hi ha diferències i matisos en les seves redaccions.`,
    avaluació: `El primer i el segon exercici ens mostren una realitat que vivim a diari. Els mitjans de comunicació i les xarxes socials compten amb un gran volum d’informació que, com a receptors, hem de saber escollir, filtrar i contrastar.`,
    etiquetes: ["Interior"],
  },
  {
    id: 94,
    title: `La notícia en piulades`,
    descripció: `En aquesta dinàmica descobrirem com el fet de publicar tweets pot transformar la percepció que es té d’una informació perquè s’ha explicat amb un caire molt subjectiu..`,
    participantsmin: 1,
    participantsmax: 30,
    edatmin: 12,
    edatmax: 18,
    durada: "30mins",
    objectiusMoni: (
      <div>
        <ul>
          <li>· Fomentar la participació i motivació entre els joves.</li>
          <li>· Ser capaç de moderar el debat final de la dinàmica.</li>
          <li>· Cohesionar el grup de joves.</li>
        </ul>
      </div>
    ),
    objectiusInf: (
      <div>
        <ul>
          <li>· Potenciar l’esperit crític vers les xarxes socials.</li>
          <li>
            · Descobrir que la informació a les xarxes pot estar manipulada.
          </li>
          <li>· Millorar la capacitat de síntesi. </li>
          <li>· Reflexionar sobre la pròpia conducta.</li>
        </ul>
      </div>
    ),
    material: `Folis i llapis`,
    introducció: `En aquesta dinàmica volem prendre consciència que les xarxes socials, concretament Twitter, tenen el perill de caure en una subjectivització i una excessiva síntesi de la informació. El primer que farem serà dividir els membres del grup per parelles o en grups de tres. Un cop estiguin tots separats per la sala (prou separats perquè cada parella o grup pugui treballar amb total independència), el monitor llegirà en veu alta una notícia real d’un cert grau de rellevància social i de qualsevol temàtica.`,
    desenvolupament: `Un cop el monitor/a hagi llegit la notícia, els membres dels diferents grups tindran aproximadament 15 minuts per redactar un total de dos piulades. Com en els tweets reals, hauran d’escriure 140 caràcters com a màxim. En aquests, hauran d’introduir-hi la informació de la notícia llegida amb anterioritat que ells creguin més important. `,
    avaluació: `Un cop tots els grups o parelles hagin elaborat els seus dos tweets, els passarem a llegir un per un, i el monitor anirà anotant en un full les diferents informacions que cada parella o grup ha decidit incloure en els seus tuits. Per acabar, haurem de reflexionar sobre els següents temes:

    1. La informació de cada tuit és diferent o cada parella ha decidit incloure la mateixa informació?
    
    2. Valorar si nosaltres, com a consumidors d’Internet, ens creiem tot el que llegim i si som conscients de la càrrega subjectiva de la informació que ens arriba.
    
    3. Comprovar que nosaltres, persones anònimes i sense professionalitat en el camp de la comunicació i el periodisme, podem difondre qualsevol notícia i informació.
    
    4. Reconèixer que el fet d’haver de reduir tant una notícia, fa a que molta informació important acabi desapareixent. `,
    etiquetes: ["Interior"],
  },
  {
    id: 95,
    title: `Les telenoticies del nostre esplai`,
    descripció: `Dinàmica de grup que consisteix en preparar i realitzar un telenotícies sobre el centre d'esplai o cau.`,
    participantsmin: 1,
    participantsmax: 30,
    edatmin: 9,
    edatmax: 15,
    durada: "1h30",
    objectiusMoni: (
      <div>
        <ul>
          <li>
            · Potenciar la col·laboració de tots els infants dins del grup.
          </li>
          <li>· Ensenyar a elaborar notícies periodístiques. </li>
          <li>· Cohesionar el grup de joves.</li>
        </ul>
      </div>
    ),
    objectiusInf: (
      <div>
        <ul>
          <li>· Conèixer l’estructura que té un telenotícies.</li>
          <li>· Millorar la comunicació oral.</li>
          <li>· Crear notícies sobre el propi esplai o cau.</li>
        </ul>
      </div>
    ),
    material: `Fulls blancs, bolígrafs, cartolines de colors, ordinador, retoladors`,
    introducció: `Es proposarà als infants elaborar un telenotícies del propi espai. Cada grup haurà d’elaborar una notícia d’un tema assignat seguint la mateixa estructura: títol-subtítol-text-imatge/fotografia.`,
    desenvolupament: `Els monitors repartiran a cada grup la secció per a la qual serà la notícia que ha d’elaborar: nacional, internacional, esports, cultura, música i curiositats. Cada grup haurà de redactar una notícia de la secció que li hagi tocat amb algun tema/notícia que hagi passat al centre d’esplai.`,
    avaluació: `Per finalitzar la dinàmica, cada grup explicarà a la resta de companys de secció la notícia que ha desenvolupat i procedirà a llegir-la com si fessin un Telenotícies real. També es pot proposar d’explicar les notícies a d’altres seccions del centre d’esplai o cau. `,
    etiquetes: ["Interior"],
  },
  {
    id: 96,
    title: `El director de l'orquestra`,
    descripció: `Joc tradicional de rotllana i d'imitació.`,
    participantsmin: 12,
    participantsmax: 20,
    edatmin: 4,
    edatmax: 11,
    durada: "3 mins per ronda",
    objectiusMoni: (
      <div>
        <ul>
          <li>· Evitar que s’estableixin rols de lideratge molt marcat.</li>
          <li>· Potenciar el treball en equip entre els participants.</li>
        </ul>
      </div>
    ),
    objectiusInf: (
      <div>
        <ul>
          <li>· Qui la para haurà de descobrir qui dirigeix l’orquestra.</li>
          <li>
            · Tenir en compte les necessitats dels participants segons la
            discapacitat.
          </li>
        </ul>
      </div>
    ),
    material: `Sense material`,
    introducció: `Aquest és un joc d’enginy que consisteix en descobrir qui ha iniciat la sèrie de ritmes.`,
    desenvolupament: `Mentre un s’allunya de la rotllana (surt fora de la sala), els qui es queden a la rotllana han d’escollir, en secret, una persona del grup que serà el director o directora d’orquestra. Aquest comença a fer una acció repetidament que tots han d’imitar i que va canviant regularment (ex: picar de mans, treure la llengua, moure el cap,...). Entra qui està fora, es col·loca al mig i ha d’endevinar qui és el director o directora d’orquestra. Si ho endevina entra a formar part de la rotllana. Llavors, es tria una altra persona perquè descobreixi el nou director o directora.`,
    avaluació: `En el cas de discapacitat física es pot fer asseguts al terra i/o en cadires.
    Garantir que es facin moviments que tothom pugui fer i delimitar-los a 3-4 en el cas de discapacitat intel·lectual.`,
    etiquetes: ["Interior", "Jocs curts", "Sense material"],
  },
  {
    id: 97,
    title: `Compartim vivències`,
    descripció: `Els infants i/o els joves compartiran vivències i possibles actuacions a partir d'emocions.`,
    participantsmin: 1,
    participantsmax: 10,
    edatmin: 4,
    edatmax: 11,
    durada: "50 mins",
    objectiusMoni: (
      <div>
        <ul>
          <li>
            · Afavorir un clima que faciliti l’expressió iaprofundiment de les
            converses de cadagrup.
          </li>
          <li>
            · Ajudar i acompanyar els infants i/ojoves a plantejar actuacions
            que ajudin a generar benestar.
          </li>
        </ul>
      </div>
    ),
    objectiusInf: (
      <div>
        <ul>
          <li>· Augmentar el vocabulari emocional.</li>
          <li>· Desenvolupar consciència emocional.</li>
          <li>
            · Reflexionar per a plantejar possibles accions per ajudar- nos a
            gestionar les emocions.
          </li>
        </ul>
      </div>
    ),
    material: `Papers, llapis, cartolina i retoladors de colors`,
    introducció: `Es pregunta als infants i/o joves de l'activitat: quines emocions coneixeu? I a partir del que expressin fem una llista on l’educador/a pot afegir-ne algunes que no hagin sortit. És recomanable que el monitor/a tingui preparat vocabulari emocional per poder ampliar i enriquir  el llistat.`,
    desenvolupament: `Dividim el grup en petits grups i seguidament, cada grup apunta en paperets les emocions comentades amb anterioritat, a cada paperet una emoció. Un membre del grup agafa a l’atzar un paperet, llegeix l’emoció que hi ha escrita i explica a la resta dels membres del petit grup quan ha sentit aquella emoció i  què creu que li aniria bé a una persona quan sent aquella emoció. Un cop a acabat d’explicar-ho, ho realitza un al- tre company/a fins que surtin totes les emocions.`,
    avaluació: `Cada grup ha de decidir quines coses podem fer quan sentim cadascuna  de les emocions per després explicar-ho a  la resta de grups. Finalment, cada grup expressa de forma lliure i creativa en una cartolina gran allò que ha viscut en petit grup, per tal de poder-ho compartir amb la resta de companys/es.`,
    etiquetes: ["Interior", "Exterior"],
  },
  {
    id: 98,
    title: `Joc de les espècies exòtiques`,
    descripció: `Joc de punteria amb anelles que tracta de capturar exemplars d'espècies invasores sense malmetre les autòctones. Les espècies exòtiques que resulten invasores són un problema greu per als nostres ecosistemes i està a les nostres mans solucionar-ho!`,
    participantsmin: 5,
    participantsmax: 25,
    edatmin: 4,
    edatmax: 11,
    durada: "20-30 mins",
    objectiusMoni: (
      <div>
        <ul>
          <li>· Transmetre nou coneixement d'una forma lúdica.</li>
        </ul>
      </div>
    ),
    objectiusInf: (
      <div>
        <ul>
          <li>
            · Descobrir el concepte d'espècies exòtiques invasores i d'espècies
            autòctones.
          </li>
          <li>· Practicar la protecció del medi ambient.</li>
          <li>
            · Practicar la punteria i cooperar per a solucionar un problema.
          </li>
        </ul>
      </div>
    ),
    material: `Cartró, tubs de paper higiènic o de cuina, cola o cinta adhesiva`,
    introducció: `Farem un taller amb tortugues de cartró. Algunes es poden pintar com tortugues de florida (amb les orelles vermelles i de la categoria exòtica invasora) i d’altres sense res (tortuga de rierol) o amb punts rodons grocs (tortuga d’estany), ambdues autòctones. A aquestes formes se’ls hi enganxa un tub de paper higiènic o paper de cuina en la part superior. Per últim, es retallen anelles que poden ser de diferents mides per complicar el joc.

    Es pot fer amb altres espècies altament in- vasores com el cranc americà, el mosquit tigre, el musclo zebra, etc.`,
    desenvolupament: `En un espai es disposen amb tubs de paper higiènic les figures escampades. La majoria de tortugues són exòtiques (tortuga  de  florida  i  tortuga  mossegadora)  i algunes poques tortugues autòctones (rierol, estany i mediterrània).

    A l’inici es pot fer una mica d’introducció sobre la diferència entre una espècie exòtica (alòctona) i una espècie autòctona i del significat de que sigui invasora. Tot seguit, es divideixen els infants en equips. Des d’una distància s’han de tirar anelles per capturar les tortugues exòtiques, tot encertant-les sobre el tub. Cada tortuga exòtica capturada conta 3 punts. Però si per error es captura una tortuga autòcto- na, resta 5 punts!
    
    Al final es fa un recompte de les tortugues exòtiques i autòctones que queden   i es valora si la solució ha sigut adequada o no. També si hem ajudat a capturar les tortugues exòtiques o també hem afectat a les poques autòctones.
    
    Variants:
    
    - Es poden fer anelles de colors, i també tortugues de colors.  Cada  equip  ha d’atrapar les exòtiques del seu co- lor, o bé del color d’un altre equip. També es pot fer  que  si  un  equip  tira una anella a una tortuga  d’un  altre grup li anul·la el punt, etc.
    
    - Fer que la disposició inicial de les tortugues la posin elles i ells  per torns i per equips, complicant les posicions per a dificultar el tir.`,
    avaluació: `Per saber si els objectius plantejats estan assolits analitzarem quin d'aquests aprenentatges han adquirit els nostres infants:

    - Una tortuga exòtica arriba a un ecosistema de forma no natural.
    
    - Una tortuga exòtica invasora té unes capacitats molt bones per adaptar-se a aquell espai i no té enemics naturals, augmentant  ràpidament en nombres i perjudicant les espècies autòctones.
    
    - La causa de l’arribada de les espècies és humana, no és culpa de l’animal invasor.`,
    etiquetes: ["Jocs curts", "Interior", "Exterior"],
  },
  {
    id: 99,
    title: `El salt de "l'avaluk"`,
    descripció: `Joc d’habilitat inuit que treballa l’habilitat motriu en els participants`,
    participantsmin: 5,
    participantsmax: 50,
    edatmin: 4,
    edatmax: 11,
    durada: "10-15 mins",
    objectius: (
      <div>
        <ul>
          <li>· Desenvolupar habilitats motrius.</li>
          <li>· Conèixer jocs de cultures diferents a la nostra.</li>
        </ul>
      </div>
    ),
    material: `Una corda i una manta, una jaqueta o qualsevol element per fer saltar la resta dels companys`,
    introducció: `El joc que presentem en aquest número de la revista el podríem englobar dins de la família de Jocs d’Arreu del Món. Saltar la pell de la foca és un joc d’origen inuit –o esquimal-, és a dir, de persones originàries de regions àrtiques d’Amèrica, Groenlàndia i Sibèria. És per això que rep aquest nom tan curiós.`,
    desenvolupament: `El joc en qüestió no és massa complicat.

    Hi ha dues persones que “paren” i s’encarreguen de moure la corda, que tindrà lligat un element (sac de patates, jaqueta, llençol, etc.). Les dues persones que paren hauran de moure la corda cap on vulguin, de manera que el moviment que realitzarà serà sempre aleatori.
    
    Mentrestant, els qui no paren hauran d’evitar ser tocats per la corda i l’element que hi tingui lligat. Podran esquivar, saltar, ajupir-se, etc. per tal de no ser tocats.
    
    El nivell de dificultat del joc serà escollit pels qui el dirigeixin, sempre tenint en compte l’edat dels participants.`,
    avaluació: `Els objectius principals d’aquesta activitat són aprendre un joc nou d’arreu del món i desenvolupar habilitats motrius. Alhora, també es treballa la desinhibició i el sentiment de grup.

    És important que els dirigents de l’activitat sàpiguen conduir bé el joc, és a dir, que mostrin més dificultat a aquells infants que tinguin més destresa motriu i que el facilitin a aquells que més els costa.
    
    A partir d’aquesta activitat, podem fer que els participants ofereixin i expliquin algun dels jocs similars que coneguin.`,
    etiquetes: ["Jocs curts", "Exterior"],
  },
  {
    id: 100,
    title: `La portera`,
    descripció: `Aquest joc es pot fer amb infants de totes les edats. Només cal que imitin tot el que els indiqui el monitor. Joc de repetició.`,
    participantsmin: 3,
    participantsmax: 20,
    edatmin: 4,
    edatmax: 11,
    durada: "10 mins",
    objectius: (
      <div>
        <ul>
          <li>· Trencar el gel entre els participants.</li>
          <li>· Saber seguir les indicacions de l’educador.</li>
          <li>· Perdre la vergonya.</li>
        </ul>
      </div>
    ),
    material: `Sense material`,
    introducció: `Per realitzar aquest joc cal que tinguem present que els infants faran tot allò que els indiquem perquè el nostre paper de model a seguir s’accentua.

    Al començament, potser, hi haurà algun infant a qui li costarà començar a jugar, però a mesura que el joc avanci s’hi afegirà.`,
    desenvolupament: `Es col·loquen tots els jugadors fent una rotllana a peu dret al costat de l’educador, que és qui donarà les indicacions corresponents.

    Els nens i nenes hauran de fer i dir el mateix que faci i digui el monitor.
    
    Si el monitor diu: Pujo l’escala! , els infants seguidament diran: Pujo l’escala! I gesticularan els mateixos moviments que hagi fet l’educador.
    
    Després de cada pausa de l’educador és quan els infants han d’imitar-lo.
    
    El text que caracteritza el joc és el següent: 
    
    Monitor: Pujo l’escala! //
    
    Infants: Pujo l’escala!
    
    Monitor: Truco a la porta! //
    
    Infants: Truco a la porta!
    
    Monitor: I la portera em demana //
    
    Infants: I la portera em demana
    
    Monitor: I vostè, què vol? //
    
    Infants: I vostè, què vol?
    
    Monitor: Jo? //
    
    Infants: Jo?
    
    Monitor: Jo? //
    
    Infants: Jo?
    
    Monitor: Jo? //
    
    Infants: Jo?
    
    Monitor: Jo venc mitges //
    
    Infants: Jo venc mitges
    
    Monitor: i mitjons //
    
    Infants: i mitjons
    
    Monitor: i calçotets  //
    
    Infants: i calçotets
    
    Monitor: i pantalons //
    
    Infants: i pantalons
    
    Monitor: camises de llana  //
    
    Infants: camises de llana
    
    Monitor: i barrets de cotó  //
    
    Infants: i barrets de cotó
    
    Monitor: Jo?  //
    
    Infants: Jo?
    
    Monitor: Jo?  //
    
    Infants: Jo?
    
    Monitor: Jo?  //
    
    Infants: Jo?
    
    Monitor: Jo no vull res de tot això! //
    
    Infants: Jo no vull res de tot això!
    
    Monitor: Truqui a la porta del costat! //
    
    Infants: Truqui a la porta del costat!
    
    Al mateix temps que el monitor diu la frase o la paraula gesticula allò que fa.
    
    Els infants han de fer el mateix.
    
    El primer cop es fa normal, però la resta de vegades el monitor pot anar canviant el rol: pot fer-ho com un pinxo, com una persona trista, cantant, en una altra llengua, parlant cada cop més ràpid, etc.`,
    avaluació: `Aquest joc serveix per tornar a la calma, en un moment determinat, i perquè els infants aprenguin a concentrar-se i seguir, correctament, les indicacions del monitor.

    És un joc molt agraït de fer, sobretot, amb infants petits: de 3, 4 i 5 anys.
    
    Si el grup d’infants és d’edat més avançada, també pot ser un dels jugadors qui doni les indicacions; aleshores, poden treballar la seva iniciativa i imaginació.
    
    D’aquesta manera, s’allarga el joc i els infants poden mostrar-se tal i com són.`,
    etiquetes: ["Jocs curts", "Exterior", "Interior", "Sense material"],
  },
  {
    id: 101,
    title: `El rellotge`,
    descripció: `Joc de tornada a la calma. Adequat per fer després d’una bateria de jocs d’alta intensitat o quan necessitem relaxar el grup d’infants per començar una activitat que requereixi un clima grupal de concentració i tranquil·litat.`,
    participantsmin: 2,
    participantsmax: 50,
    edatmin: 9,
    edatmax: 18,
    durada: "El que es vulgui",
    objectius: (
      <div>
        <ul>
          <li>· Saber tornar a la calma.</li>
          <li>· Desenvolupar la capacitat de concentració.</li>
          <li>· Aprendre a gestionar els estats d’ànim.</li>
        </ul>
      </div>
    ),
    material: `Un rellotge`,
    introducció: `Hi ha moments en què els monitors hem de buscar en la nostra maleta invisible certs recursos per tal de captar l’atenció del grup d’infants i reconduir el seu estat d’ànim quan estan (excessivament) animats. “El rellotge” desenvolupa en els infants habilitats personals i permet aconseguir que el grup estigui en silenci absolut durant uns minuts.`,
    desenvolupament: `Els participants es col·loquen asseguts o estirats còmodament al terra. Es proposa un repte al grup: qui serà capaç de comptar en silenci fins al número indicat pel monitor/a seguint el ritme exacte d’un rellotge? El número que s’indica ha de ser més o menys elevat, segons l’edat dels infants. És recomanable triar-lo entre el 20 i el 60 per tal de no fer que la ronda sigui massa curta o massa llarga.

    Quan els infants arribin al número indicat han d’aixecar la mà sense fer soroll i, a continuació, podran obrir els ulls, observant en silenci la resta de companys com acaben de fer el seu recompte.
    
    El monitor/a ha de controlar el temps amb un rellotge i avisar el grup quan realment s’hagi arribat als segons indicats. A més a més, estarà pendent dels qui hagin fet el compte exactament com el rellotge.
    
    El nombre de rondes a fer depèn de la corba d’interès que mostrin els infants envers el joc. En el moment que sospitem una disminució de l’interès dels infants és recomanable finalitzar la partida. Així, en una altra ocasió que el tornem a proposar, hi haurà més probabilitats que tingui una acceptació positiva en els infants.`,
    avaluació: `Un cop acabem cada ronda es pot crear un espai d’intercanvi que pot iniciar-se comentant quines persones del grup han anat massa ràpid, quines han anat massa a poc a poc, quins infants han comptat de forma exacta... amb l’objectiu d’afavorir un procés de regulació per a la següent ronda. El repte de fer-ho millor o de repetir el resultat la següent ronda pot afavorir que es mantingui la motivació dels infants per seguir jugant.

    Si el dinamitzador del grup ho considera oportú també es pot reflexionar amb els infants sobre la importància de saber estar en silenci i de valorar la necessitat de crear un clima més tranquil per facilitar la realització de certes tasques. El que es viu durant el joc es pot utilitzar per reflexionar sobre allò que considerem necessari treballar amb el grup.
    
    Tenir a mà “El rellotge” ens facilita aconseguir de forma lúdica i divertida que els infants creïn un clima de grup relaxat i tranquil.`,
    etiquetes: ["Jocs curts", "Exterior", "Interior"],
  },
  {
    id: 102,
    title: `Per començar... una cançó`,
    descripció: `Cançons populars per triar, per unir-se al grup, perquè es quedi a fer de vigilant (parar) o per eliminar (segons el joc) persones o parts del cos.`,
    participantsmin: 3,
    participantsmax: 50,
    edatmin: 4,
    edatmax: 18,
    durada: "2-5 mins",
    objectius: (
      <div>
        <ul>
          <li>· Interioritzar el ritme</li>
          <li>· Afavorir la memòria, la retenció i l’atenció.</li>
          <li>· Garantir la imparcialitat de l’elecció</li>
          <li>· Acceptació i assimilació de les normes i regles del joc.</li>
          <li>· Gaudir de les cançons populars catalanes i difondre-les.</li>
        </ul>
      </div>
    ),
    material: `Sense material`,
    introducció: `Com decidim qui pertany al grup i qui no? I qui la “pararà”? Qui pagarà penyora? I la resposta és: Que ho decideixi la cançó!`,
    desenvolupament: `Posant-nos en fila o en cercle, però tots en ordre, hi ha una persona que defineix l’objectiu: Qui paga “penyora”, qui la para, qui es salva... Després aquesta persona comença a cantar la cançó escollida, sempre assenyalant amb el dit i coincidint el cop de paraula de la cançó amb un salt que fa el dit d’un infant a l’altre. 

    Seguint l’ordre establert (fila, rodona, etc.) es continua fins que s’arriba a la darrera síl·laba. En aquest moment, el participant a qui li ha tocat queda escollit o eliminat segons l’objectiu establert. I es torna a començar si és necessari.
    
    La resta de nens/es poden també acompanyar o cantar la cançó.`,
    avaluació: `La millor avaluació que podem fer és observar el següent:

    Que els grups (en el cas de fer-ne) han estat creats amb imparcialitat (no hi ha hagut discussions sobre l’elecció).
    Que tots coneixen la cançó i, per tant, que poden cantar-la, seguir-la i fins i tot corregir el/la nen/a que la canta (aprenen la cançó, la memoritzen i n’interioritzen el ritme).
    Que el/la nen/a que “paga” penyora no hi pot fer res perquè “li ha tocat” (acceptació i assimilació de les normes i regles del joc: joc net).
    Que la cançó o les cançons, així com el mètode, passen dels uns als altres. 
    Segons la finalitat dels jocs, és important no perdre gaire temps, així que abreviar cançons o escollir-ne de curtes també pot ser una bona elecció.
    
    Si volem ficar-nos en aquest món, podem descobrir que “sempre” ha existit aquesta mena de cançons i que n’hi ha de tot arreu.
    
    Recorda: Si no vols complicar-te triant, escull sempre una cançó bonica.`,
    etiquetes: ["Jocs curts", "Exterior", "Interior", "Sense material"],
  },
  {
    id: 103,
    title: `La pila de sabates`,
    descripció: `És un joc de rapidesa i habilitat visual i manual.`,
    participantsmin: 3,
    participantsmax: 50,
    edatmin: 4,
    edatmax: 15,
    durada: "10 mins",
    objectius: (
      <div>
        <ul>
          <li>
            · Ser el primer a trobar les pròpies sabates, posar-se-les bé i
            seure al mateix punt de sortida.
          </li>
        </ul>
      </div>
    ),
    material: `Les sabates de cada jugador.`,
    introducció: `Per fer aquest joc ens aniria bé tenir un espai exterior com ara una pista de bàsquet o un camp de gespa per poder córrer descalços. És important que el lloc on juguem estigui net perquè els infants no es facin mal.

    Recomanem que hi hagi dos monitors portant l’activitat; d’aquesta manera, ens assegurem que els infants la fan correctament i no miren en el moment d’apilar les sabates.
    
    Si el joc el fem amb infants de la mateixa edat, com ara entre 5 i 6 anys, podem aprofitar l’activitat perquè els nens i nenes aprenguin a cordar-se ells mateixos les sabates, sandàlies o botes.`,
    desenvolupament: `Fem que tots els jugadors deixin les seves sabates a l’extrem oposat de la línia de sortida. Els participants seuen a l’altre extrem del camp d’esquena a les sabates. Entre les sabates i els jugadors és interessant que hi hagi un tram de 20-30 metres. Mentre un monitor distreu els jugadors que estan d’esquena a les sabates, un altre monitor les posa fent una pila ben desendreçada.

    Quan els dos monitors estan junts davant dels jugadors se’ls explica el funcionament del joc i se’ls dóna la sortida. Tots els jugadors estan asseguts a terra i l’objectiu del joc és: aixecar-se, córrer fins a les sabates, calçar-se les pròpies de cadascú i tornar al lloc de sortida. Guanya el primer que arriba al punt de sortida amb les sabates ben posades i ben cordades.`,
    avaluació: `Aquest joc és pràctic per omplir una estona de temps mort dels campaments, les colònies o els casals d’estiu. Si tenim infants de diferents edats veurem com s’ajuden els uns als altres. Normalment, els més grans ajuden els més menuts i els més petits s’espavilen a aprendre a calçar-se.

    Recordeu: si algun infant no vol participar-hi no l’obligueu. Penseu que a l’estiu i amb la calor a molts nens els suen els peus i… La finalitat principal del joc és passar una bona estona.`,
    etiquetes: ["Jocs curts", "Exterior", "Sense material"],
  },
  {
    id: 104,
    title: `Música i emocions`,
    descripció: `L'activitat es presenta com element per reconèixer els diferents tipus d'emocions i alhora ofereix l'espai per poder parlar de les situacions en les que aquestes són viscudes pels adolescents.`,
    participantsmin: 8,
    participantsmax: 20,
    edatmin: 9,
    edatmax: 11,
    durada: "1h",
    objectiusMoni: (
      <div>
        <ul>
          <li>
            · Identificar estats d'ànim i sensibilitzar els joves a verbalitzar
            les emocions i a reconèixer-les
          </li>
        </ul>
      </div>
    ),
    objectiusInf: (
      <div>
        <ul>
          <li>
            · Oferir un espai que permeti parlar i compartir estats anímics,
            alhora que donem a conèixer músiques que estan fora del circuit de
            la música que acostumen a escoltar.
          </li>
        </ul>
      </div>
    ),
    material: `Aparell reproductor de música, fulls de paper blanc, llapis`,
    introducció: `Es pot iniciar l'activitat a partir d'una lectura significativa i que ens ajudi a introduir el tema que tractem. Una que acostuma a funcionar i que precisament tracta sobre la identificació emocional és "La tristeza y la ira" de Jorge Bucay.`,
    desenvolupament: `Una vegada presentada l'activitat, intentem exposar les diferents maneres d'escoltar. Ho podem fer a partir d'una pluja d'idees en relació a les diferents situacions en què ells mateixos escolten música (mentre fan esport, quan llegeixen, en un bar, al carrer amb els amics, etc.) Oferim la possibilitat de tancar els ulls i els hi proposem una escolta activa. D'aquesta manera anem presentant les diferents audicions i els demanem que en finalitzar-les escriguin un número referit a la cançó i al costat identifiquin amb quina emoció relacionen la cançó que han escoltat.`,
    avaluació: `En finalitzar les audicions, tornarem a escoltar les cançons i demanarem que els alumnes identifiquin la cançó amb l'emoció que han escrit. En acabar farem una valoració de com s'han sentit i d'allò que més els hi ha agradat i allò que menys. // Observacions:

    La tria de les cançons és lliure. Cal tenir en compte, però, que a l'hora de triar-les s'ha de buscar música de contrastos, doncs això afavorirà el reconeixement i la diferenciació dels diferents estats anímics.
    
    Us proposem alguns temes que podeu fer servir: "In the Summer Time" (Mungo Jerry), "El cant del ocells" (tradicional catalana/Pau Casals), "Gonna Fly Now" (Bill Conti. Banda sonora de "Rocky"), "Jamming" (Bob Marley and The Wailers), "The Storm" (Anton Coppola. Banda sonora de "Dràcula"). `,
    etiquetes: ["Jocs curts", "Interior", "Narració i expressió"],
  },
  {
    id: 105,
    title: `Els embruixats del bilboquet`,
    descripció: `L’objectiu del joc és que els bruixots deixin paralitzats tots els jugadors mentre que els jugadors han d’intentar encertar el suro al pot per a poder continuar jugant.`,
    participantsmin: 10,
    participantsmax: 50,
    edatmin: 4,
    edatmax: 11,
    durada: "Depén de grup",
    objectiusMoni: (
      <div>
        <ul>
          <li>· Introduir jocs fets amb material reciclat.</li>
          <li>
            · Dur a terme un taller per després utilitzar el que s’ha fabricat
            de manera lúdica.
          </li>
        </ul>
      </div>
    ),
    objectiusInf: (
      <div>
        <ul>
          <li>· Cooperar amb els companys.</li>
          <li>
            · Mostrar habilitats en encertar o fer punteria en tot moment.
          </li>
          <li>· Guanyar destresa manual fent un taller.</li>
        </ul>
      </div>
    ),
    material: `Materials necessaris per fabricar un bilboquet: 1 pot de iogurt, fil elàstic fi, un punxó, un tap de suro, una agulla gran i unes tisores. // 
    Per a jugar: un guix i un bilboquet per jugador.`,
    introducció: `Com fabriquem el bilboquet: Netegem el pot del iogurt, fem un forat al fons del pot i retallem un tros de fil elàstic d’uns 50 cm. Passem aquest fil pel forat del pot de iogurt i li fem un nus a la part de dins. Amb el punxó fem un forat al tap de suro de dalt cap a baix i amb l’agulla hi passem el fil que ens ha quedat penjat del pot de iogurt. Traiem l’agulla i hi fem un nus.`,
    desenvolupament: `Delimitem un espai de joc, demanem que tres participants facin de bruixots i la resta es distribueixen per l’espai amb un bilboquet cadascun. 

    Els bruixots han de perseguir la resta de participants. Quan un jugador és tocat s’ha de quedar paralitzat i per tornar a jugar ha d’encertar el tap de suro dins del iogurt (jugar amb el bilboquet). 
    
    L’objectiu del joc és que els bruixots deixin paralitzats tots els jugadors mentre que els jugadors han d’intentar encertar el suro al pot per a poder continuar jugant.`,
    avaluació: `Un cop s’ha fet una partida, se’n fa una segona canviant els papers dels participants. Això ho fem per a treballar l’empatia. 

    També podem fer més partides ampliant l’espai de joc o afegint noves normes. 
    
    Aquest joc serveix per a veure que podem jugar a partir de material que ens hem fabricat nosaltres mateixos.`,
    etiquetes: ["Jocs curts", "Exterior"],
  },
  {
    id: 106,
    title: `Un tresor ben fred`,
    descripció: `Una activitat refrescant pensada per l’estiu. Quan anem de colònies, sovint fem alguna gimcana per trobar un tresor amagat. Normalment, trobar el tresor implica tenir el premi d’immediat. Però què pot passar quan el tresor està amagat en un bloc de gel que no podem trencar?`,
    participantsmin: 2,
    participantsmax: 50,
    edatmin: 4,
    edatmax: 15,
    durada: "Indiferent",
    objectiusMoni: (
      <div>
        <ul>
          <li>
            · Fer descobrir als infants una nova manera de trobar un tresor.
          </li>
          <li>· Refrescar i remullar els infants</li>
        </ul>
      </div>
    ),
    objectiusInf: (
      <div>
        <ul>
          <li>· Tenir paciència quan el resultat no és immediat.</li>
          <li>· Pensar maneres de desfer un bloc de gel.</li>
          <li>· Treballar en equip per aconseguir un objectiu comú.</li>
        </ul>
      </div>
    ),
    material: `Aigua i objectes de colors`,
    introducció: `Cal escollir quin serà el tresor, i vigilar que sigui quelcom que es pugi mullar, o bé que no es faci malbé amb el contacte amb l’aigua. Busquem un recipient on posar-ho i ho cobrim tot d’aigua.
    Poseu-ho al congelador almenys durant un dia sencer. Procureu que el recipient sigui d’un plàstic fi, per tal de poder-lo tallar. Si poseu objectes a dins de colors variats i vius, serà molt més impactant quan descobreixin el tresor. També podeu afegir una mica de colorant a l’aigua, per tal que el bloc sigui de color.`,
    desenvolupament: `Un cop els nens i nens han trobat el tresor s’adonaran que just en aquell moment no poden accedir-hi perquè està dins el bloc de gel. Aquí és on comença la gràcia del joc. Com reaccionaran? Tindran paciència fins que es desfaci? Pensaran estratègies per aconseguir que es desfaci més ràpid?

    Serà bo que fem aquesta activitat en un moment en què faci calor o força sol, així es desfarà més ràpid el gel. La mateixa acció de desfer el gel pot ser un moment per jugar i refrescar-se. Es poden anar passant el gel de mà en mà, es poden refrescar posant el gel a l’esquena, al coll o al cap, etc.`,
    avaluació: `Caldrà avaluar quines han estat les estratègies que han pensat els infants per a desfer el bloc de gel de la manera més ràpida. També cal veure i comentar amb ells com han reaccionat pel fet que el tresor no l’han pogut tenir just al moment de trobar-lo. Finalment, l’equip de monitors pot explicar quines poden ser les maneres de desfer més ràpid.`,
    etiquetes: ["Jocs curts", "Exterior", "Interior"],
  },
  {
    id: 107,
    title: `Envàs on vas`,
    descripció: `Joc per aprendre a classificar els residus segons el color del contenidor on van.`,
    participantsmin: 2,
    participantsmax: 50,
    edatmin: 12,
    edatmax: 18,
    durada: "10 mins",
    objectiusMoni: (
      <div>
        <ul>
          <li>
            · Conscienciar els infants sobre la importància de la recollida
            selectiva.
          </li>
        </ul>
      </div>
    ),
    objectiusInf: (
      <div>
        <ul>
          <li>· Descobrir a quin contenidor va cada residu.</li>
          <li>
            · Prendre consciència de la importància de la recollida selectiva.
          </li>
        </ul>
      </div>
    ),
    material: `50 globus gegants, 5 pancartes dels colors dels contenidors (marró, gris, blau, verd i groc), 50 imatges de residus (10x contenidor)`,
    introducció: `Moltes vegades dubtem sobre el contenidor on aniran els diferents residus que generem. Aquesta és una ocasió per aprendre-ho de forma divertida.`,
    desenvolupament: `Per jugar a aquest joc s’han de fer cinc equips, un per cadascun dels contenidors, que estaran repartits per l’espai de joc. L’objectiu d’aquests equips és que els residus que pertanyen al seu contenidor acabin al lloc que els correspon.

    Cada imatge d’un residu anirà lligada o enganxada a un globus, i es seleccionaran imatges de deixalles que generen dubtes, com per exemple, el marro del cafè, un bric de llet, pols d’escombrar, una bombeta...
    
    Per fer arribar cada globus al seu contenidor corresponent, s’haurà de passar a través dels membres de l’equip, sense que toquin a terra. Es poden interceptar els globus dels altres equips per dificultar-los la tasca. Guanya l’equip que primer reuneix totes les seves deixalles.`,
    avaluació: `En acabar el joc, es pot fer una petita reflexió amb els joves sobre quins residus s’han fet més difícils de classificar i els beneficis que pot tenir una bona recollida selectiva a les seves llars, a l’esplai, a colònies, etc.`,
    etiquetes: ["Jocs curts", "Interior"],
  },
  {
    id: 108,
    title: `Les nostres pors`,
    descripció: `Mitjançant una passejada nocturna pel bosc en busca d'un conte es convidarà els participants a reflexionar sobre les seves pors i els beneficis i els inconvenients de tenir-les.`,
    participantsmin: 1,
    participantsmax: 50,
    edatmin: 9,
    edatmax: 15,
    durada: "1h/1h30",
    objectiusMoni: (
      <div>
        <ul>
          <li>
            · Convidar els infants i els joves a reflexionar sobre la por.
          </li>
          <li>· Mostrar la part positiva de la por.</li>
          <li>· Donar a conèixer activitats diferents per treballar la por.</li>
          <li>
            · Aprendre sobre els diferents tipus de por que existeixen (sempre
            treballem la mateixa por).
          </li>
        </ul>
      </div>
    ),
    objectiusInf: (
      <div>
        <ul>
          <li>· Entendre que la por no sempre és dolenta.</li>
          <li>· Detectar diferents tipus de pors.</li>
        </ul>
      </div>
    ),
    material: `Text sobre la por de carles Capdevila, conte "El monstre de colors", guitarra`,
    introducció: `Apareixerà un personatge infantil que ha perdut el conte que li havien d’explicar aquesta nit per anar a dormir i que necessita anar-lo a buscar. Demanarà ajuda als participants perquè l’acompanyin ja que creu que l’ha perdut al bosc i té por d'anar-hi sol.`,
    desenvolupament: `Els participants es dividiran  en  grups  de 6 o  8  integrants  i  aniran  caminant al bosc on trobaran fragments del text de “La por” escrit per Carles Capdevila. A cada fragment que trobin, convidaran a reflexionar, sigui interiorment o en debat grupal sobre allò que han llegit. Algunes de les preguntes que podem plantejar són:

    Quines són les vostres pors?
    On us neixen? Dins vostre o en elements externs?
    Identifiqueu les vostres pors com quelcom positiu o negatiu?
    Algun cop us heu sentit beneficiats o perjudicats per les vostres pors? Que en vau aprendre de les vostres experiències amb aquesta emoció?
    Alguna vegada heu deixat de fer/ dir/experimentar alguna cosa per  por? Va valer la pena? 
    Finalment els grups trobaran el conte, que pt estar en un lloc comú per a tots els grups o dividit en fragments i ajuntar-se posteriorment per llegir-lo. Un dels contes que podríem llegir seria "El monstre de colors" de Santi Balmes.
    
    Per a tancar l'activitat cantarem la cançó d'Els Pets "Por". Al final, explicarem que aquesta cançó ens parla de la por, però ho fa d'aquelles pors que sovint ens costa parlar, tot i ser les més comunes com: la por a parlar, la por a callar, la por a estimar...`,
    avaluació: `Dies més tard en un espai més tranquil, es pot plantejar una conversa amb el grup per parlar de com es va viure la dinàmica i de si aquelles pors de les que van estar reflexionant s’han tornat a repetir o com han pogut canviar la seva actitud i/o conducta.`,
    etiquetes: ["Jocs de nit", "Exterior"],
  },
  {
    id: 109,
    title: `El tresor i les pedres màgiques`,
    descripció: `L’activitat està pensada per fer-la al vespre, abans d’anar a dormir. Mitjançant un joc de nit o d’un altre tipus, els infants trobaran una bosseta de roba a l’interior de la qual hi ha 3 pedretes de diferents colors.`,
    participantsmin: 1,
    participantsmax: 50,
    edatmin: 4,
    edatmax: 8,
    durada: "Sense determinar",
    material: `Bossetes de roba (tantes com infants hi hagi) amb 3 pedretes a dins de diferents colors.`,
    introducció: `En aquesta dinàmica, els infants trobaran una bosseta de roba a l’interior de la qual hi ha 3 pedretes de diferents colors. Primer de tot, explicarem que aquestes pedres són màgiques.

    La primera fa aparèixer caramels sota el coixí mentre estàs dormint.
    La segona fa que, quan et lleves l’endemà al matí, t’apareguin unes taques blaves a la cara (que marxen si es renten).
    La tercera fa aparèixer un tresor a sota del llit. Només pot fer aparèixer un tresor cada nit, així que no tots els que la facin servir aquell vespre tindran tresor.
    Com que la tercera pedra màgica només pot fer aparèixer un tresor, hem de convèncer els infants que es posin d’acord per compartir-lo entre tots, li toqui a qui li toqui.`,
    desenvolupament: `Cadascú decidirà quines pedres vol fer servir, si totes o només alguna d’elles. Els monitors haurem d’anar apuntant qui fa servir cada pedra, perquè ens tocarà a nosaltres amagar els caramels i pintar la cara dels infants (tot això sense que se n’adonin).

    Manera de fer servir les pedres:
    
    S’ha de posar a sobre del cap sense que caigui i fer tres passes enrere tot dient: “S'alça la matina, carquinyoli, fa un xarel·lo amb allioli?”
    S’ha de posar dins del mitjó, saltar a peu coix tres vegades i dir: “Les carxofes d’en Polop, quan bullen fan xop-xop”.
    S’ha de posar al darrere de l’orella sense que caigui i aleshores amb la mà dreta ens hem de tocar el peu esquerre i amb el nas ens hem de tocar un genoll, mentre diem: “Elàstics blaus mullats fan fàstic". 
    L’endemà al matí, a uns els apareixeran caramels en el llit, a d’altres la cara pintada, etc. Tots miraran sota el llit, per veure si ha aparegut el tresor. Sota un dels llits apareix una capsa plena de monedes d’or. Un cop comptades les monedes, resulta que n’hi ha una per a cada infant i, tal com vam acordar, les repartim entre tots.
    
    A continuació, expliquem que aquestes monedes també són màgiques i podem demanar desigs. Per fer-ho, només cal acostar-se fins a un pou, riu o bassa i llançar-les a dins perquè s’acompleixi el desig. Així que portarem els infants fins a un lloc on hi hagi aigua i tothom qui vulgui hi podrà llançar la seva moneda.`,
    avaluació: `El desig no s’acomplirà si demanem una cosa per a nosaltres; només s’acompleix quan ho demanem per a una altra persona: pares, germans, persones que no coneixem però que sabem que s’ho passen malament, etc.`,
    etiquetes: ["Jocs de nit", "Interior", "Exterior"],
  },
  {
    id: 110,
    title: `A la recerca dels vaixells extraviats`,
    descripció: `Joc en equip per conèixer els diferents sorolls de la natura a la nit i gaudir de la foscor acompanyat, sense passar por`,
    participantsmin: 4,
    participantsmax: 50,
    edatmin: 9,
    edatmax: 18,
    durada: "Indiferent",
    objectius: (
      <div>
        <ul>
          <li>· Confiar en els companys de grup en tot moment.</li>
          <li>
            · Distingir els diferents sorolls que acompanyen la nit a la
            muntanya.
          </li>
          <li>
            · Intentar fer el mínim de soroll possible per a no ser descobert.
          </li>
        </ul>
      </div>
    ),
    material: `Una o dues llanternes per equip.`,
    introducció: `Estem de colònies i ens fa una nit meravellosa on la lluna fa tanta llum que ho veiem tot sense llanternes. Fa fresca i estem pensant de dur a terme un joc de nit, però que no sigui massa mogut, que no faci por i que no requereixi gaire material.`,
    desenvolupament: `Distribuïm els jugadors en dos equips iguals i a cadascun d’ells també ens distribuïm els monitors per igual.

    Un equip es situa a l’era de la casa de colònies i es tapa els ulls tanta estona com diguin els monitors que estan dins del mateix grup.
    
    Mentrestant, l’altre equip se’n va per les rodalies de la casa: camins, boscos, prats... i quan ja creu que ha trobat un lloc prou interessant per amagar-se en la foscor, s’amaga i tots plegats criden: “TRES NAVÍOS EN EL MAR DISPUESTOS A NAUFRAGAR”.
    
    Quan els companys que estan a l’era de la casa senten el crit dels que s’han amagat – la qual cosa vol dir que estan lluny però no tant – criden en veu alta tots plegats: “ Y LOS TRES EN SU BUSCA VAN”. I comencen a buscar.
    
    Si ha passat una estona i els que s’han amagat veuen que l’altre equip no els troba perquè estan molt desorientats poden tornar a cridar: “TRES NAVÍOS EN EL MAR DISPUESTOS A NAUFRAGAR”.
    
    Quan l’altre equip – el que busca – sent el grup d’amagats ha de tornar a respondre: “ Y LOS TRES EN SU BUSCA VAN”.
    
    El joc s’acaba quan l’equip que buscava troba els que estan amagats. És recomanable repetir el joc canviant els papers per veure què ha sentit l’equip contrari.`,
    avaluació: `Perquè aquest joc sigui divertit i productiu és molt important la implicació de l’equip de monitors, tant pel que fa a la motivació com a l’hora de guardar silenci, apagar les llanternes i anar controlant que cap infant no es despisti.

    És molt divertit perquè quan acabes les colònies recordes: aquella nit que ens vam amagar tots junts a.....I, realment, tothom s’ho ha passat bé!!!`,
    etiquetes: ["Jocs de nit", "Exterior"],
  },

  {
    id: 111,
    title: `El llaner i la seva troca`,
    descripció: `Joc per a treballar l’observació dels infants en el bosc i la rapidesa en trobar brins de llana que estan penjats de les branques dels arbres i/o arbustos.`,
    participantsmin: 7,
    participantsmax: 30,
    edatmin: 9,
    edatmax: 15,
    durada: "30 mins",
    objectius: (
      <div>
        <ul>
          <li>· Observar atentament l’entorn on es desenvolupa el joc.</li>
          <li>
            · Guanyar destresa en trobar elements que no formen part del bosc.
          </li>
          <li>· Saber guanyar i saber perdre.</li>
          <li>· Estar atent al so del xiulet.</li>
          <li>· Respectar l’espai de joc.</li>
        </ul>
      </div>
    ),
    material: `40 o 60 brins de llana d’uns 30 centímetres de llarg, un xiulet`,
    introducció: `Un llaner –persona que porta una troca de llana i la custodia-, escollit a l’atzar, s’allunya de l’espai on es troben la resta de participants i s’endinsa al bosc per portar a terme la seva missió: lligar els brins de llana que porta a les mans a les branques del arbres i arbustos que vagi trobant pel camí. Passats 10 minuts, torna a l’espai on es troben la resta de participants.`,
    desenvolupament: `Quan el llaner arriba al punt de sortida la resta de participants marxen cap al bosc a buscar els brins de llana. Passats 15 minuts, el llaner toca el xiulet i els caçadors de brins han de tornar al punt de sortida per fer el recompte de brins trobats. 

    Cada bri de llana trobat equival a 1 punt. Les puntuacions s’apunten en un paper. Un cop fet el recompte cal tenir en compte que no pot quedar cap tros de llana penjat dels arbres. Si el recompte no quadra, cal sortir a recollir els brins de llana que s’han quedat penjats i tothom ha d’anar a buscar-los perquè no podem deixar res que perjudiqui l’entorn! 
    
    Tornem a comptar els brins que hem trobat i aquest cop cada bri de llana que hagi trobat un caçador val 5 punts. Els brins que trobi el llaner no compten. Es torna a fer el recompte de tots els brins i guanya el caçador que aconsegueix millor puntuació passant a ser el Gran Caçador de Llana del Bosc. 
    
    Si han quedat brins de llana penjats als arbres i/o arbustos els podem anar a buscar tots plegats, fent un passeig pel bosc, o podem fer que el llaner pagui penyora per cada bri que no hagi estat trobat.`,
    avaluació: `Ens pot servir per a veure com s’orienten els infants en un espai poc conegut. Podem jugar amb infants més petits si l’adaptem i els fem anar per parelles o grups. 

    És un joc que serveix per gaudir de l’entorn natural i el podem utilitzar per treballar el respecte per la natura i recordar que no hi hem de deixar mai res que el pugui perjudicar. Sempre que anem al bosc, hem de recollir totes les deixalles que haguem pogut produir.`,
    etiquetes: ["Jocs de nit", "Jocs de pistes i gimcanes", "Exterior"],
  },
  {
    id: 112,
    title: `Compte que et menjaràn`,
    descripció: `Treball de continguts de coneixement del medi natural.`,
    participantsmin: 16,
    participantsmax: 30,
    edatmin: 9,
    edatmax: 15,
    durada: "45 mins",
    objectiusMoni: (
      <div>
        <ul>
          <li>· Posar en valor la rellevància de la cadena tròfica.</li>
          <li>· Promoure el respecte al medi natural.</li>
        </ul>
      </div>
    ),
    objectiusInf: (
      <div>
        <ul>
          <li>· Treballar en equip.</li>
          <li>· Conèixer el funcionament de la cadena tròfica.</li>
        </ul>
      </div>
    ),
    material: `Ceres facials (3 colors), targetes blaves(aigua), targetes vermelles(menjar)`,
    introducció: `Habitualment, fomentem als nostres infants i joves el respecte al medi natural anant d’excursió a la muntanya, fent campanyes de sensibilització, etcètera. Sovint, combinar continguts amb actituds  sembla  una  tasca  complicada. I si pensem en apropar aquests conei-xements a través d’un joc de rol, on els infants siguin els propis protagonistes de la història?`,
    desenvolupament: `Per iniciar el joc de rol cal que, prèviament, escollim el nombre d’animals que volem que intervinguin en la cadena tròfica. Hem de tenir en compte que els infants es divideixen en grups i cadascun d’aquests representa un animal. En aquesta fitxa us proposem l’exemple de cadena tròfica amb tres animals (llops, gallines i cucs). 

    El repte que ha d’aconseguir cada grup d’animals al finalitzar el joc és el de mantenir el nombre màxim de supervivents del seu grup tot eliminant a les seves preses, com en el regne animal. 
    
    Per  fer-ho cal tenir en compte  que:
    
    Cada animal s’identifica amb un color i símbol a la cara.
    Cada infant disposa de tres vides. 
    Durant el joc s’estableixen tres bases (espais controlats per un monitor):
    
    El cementiri: Lloc on aniran els ani- mals que han estat menjats pels seus depredadors.
    La menjadora: Espai on els animals aniran a buscar menjar.
    El bevedor: Zona on els animals aniran a buscar aigua. 
    El sistema de caça pot ser escollit pels infants dins d’aquestes tres opcions:
    
    Lluita de galls.
    Pedra, paper i tisora gegant.
    Lluita de polzes. 
    Els participants es col·loquen lliurement per l’espai de joc. Cada vegada que dos infants es trobin hauran de lluitar per la seva supervivència (amb el sistemes de caça proposats). 
    
    Durant la caça, si guanya el depredador, la presa perdrà una vida i ho haurà d’anar a notificar al monitor del cementiri.  Si, per contra, guanya la presa, aquesta podrà marxar sense poder ser atrapada de nou pel mateix depredador. 
    
    En el cas que un infant perdi les tres vides, haurà de quedar-se al cementiri esperant que un membre del seu grup li proporcioni aigua (targeta blava) i un altre que li doni menjar (targeta vermella) amb l’objectiu d’obtenir tres vides més. L’aigua i el menjar l’aconseguiran els infants quan vagin a buscar-ho a la base corresponent. 
    
    Al finalitzar el temps establert per l’equip de monitors, es farà recompte dels animals vius de cada grup i el més nombrós serà el guanyador.​
    
    Desprès cal aprofitar aquest espai per introduir conceptes i reflexions relacio- nades amb el medi natural.`,
    avaluació: `Al finalitzar el joc de rol el grup d’infants  i monitors es reuniran per valorar com ha anat l’explicació.`,
    etiquetes: ["Jocs de nit", "Exterior"],
  },
  {
    id: 113,
    title: `Gimcana de sensacions`,
    descripció: `Gimcana per treballar els sentits. Jocs sensorials`,
    participantsmin: 1,
    participantsmax: 50,
    edatmin: 4,
    edatmax: 11,
    durada: "1h",
    objectius: (
      <div>
        <ul>
          <li>· Desenvolupar les capacitats sensorials i motores.</li>
          <li>· Organitzar-se en l’estructura espaciotemporal.</li>
          <li>· Utilitzar el llenguatge corporal.</li>
        </ul>
      </div>
    ),
    material: `Taula, plats de plàstic, llimones, sucre,sal i cafè, tovalloletes higièniques, cacau, xocolata, gelat de vainilla, gelat de maduixa, ós de peluix, cartró, esponja de mar, cabells de nina, teles de diferents mides`,
    introducció: `S’organitza tot el grup en diferents subgrups, d’entre 5 i 6 persones. Els infants han de seguir un recorregut organitzat, on es trobaran diferents jocs-activitats per realitzar.`,
    desenvolupament: `Els diferents jocs proposats són els següents: 

    1.- El fotògraf: de cada grup, un dels membres és el fotògraf i la resta, models. Cada model ha de fer una postura amb el cos (com si fos una sessió de fotos). El fotògraf ha d’observar amb detall els seus companys. Una vegada ha vist les postures dels companys, el fotògraf tanca els ulls i compta fins a 10, mentre la resta canvia de postura (els que volen). Quan el fotògraf torna a obrir els ulls, ha d’endevinar qui ha canviat la posició i recordar quina era la postura inicial d’aquest.
    
    Material: no hi ha material específic.
    
    Tipus de joc: joc de memòria visual. 
    
    2.- Quin sabor té?: Es demana als infants que seguin uns al costat dels altres, davant d’un mostrador o tauleta, i se’ls tapen els ulls. El monitor o monitora els fa tastar diferents aliments i ells han d’endevinar quin gust tenen.
    
    Material: tauleta, plats de plàstic; llimones, sucre, sal, cafè; tovalloletes; mocadors.
    
    Tipus de joc: joc de percepció del gust. 
    
    3.- De què fa olor?: Es demana als infants que seguin i se’ls tapen els ulls. El monitor o monitora els apropa els diferents aliments i ells han d’endevinar de quin es tracta a través de l’olor que desprenen.
    
    Material: tauleta, plat de plàstic; cacau, xocolata, gelat de vainilla, gelat de maduixa; tovalloletes; mocadors.
    
    Tipus de joc: jocs de percepció d’olfacte. 
    
    4.- Passa la mà: Es col·loquen tots els nens asseguts formant un cercle i se’ls tapen els ulls. Es deixen una sèrie d’objectes al mig de la rotllana i hauran d’anar palpant-los per endevinar què són. Cada vegada que un nen o nena agafi i endevini (o, no) quin objecte és, el tornarà a deixar al centre del cercle perquè estigui a disposició dels seus companys, i n’agafarà un altre.
    
    Material: ós de peluix, cartró, esponja de mar, cabells de nina; mocadors.
    
    Tipus de joc: jocs de percepció tàctil.`,
    avaluació: `Les activitats han de permetre treballar “l’espai sensorial” i afectiu de l’infant. A través d’aquesta activitat es promou el treball en equip i la responsabilitat de cada membre del grup de participar i treballar per a un objectiu comú.

    Els infants poden sentir-se incòmodes quan estan amb els ulls tapats; per això, el monitor o monitora ha d’aconseguir que el temps en les diferents activitats sigui breu i ha de transmetre confiança en els nens i nenes durant el desenvolupament de les proves.`,
    etiquetes: ["Jocs de pistes i gimcanes", "Interior", "Exterior"],
  },
  {
    id: 114,
    title: `Gimcana de la biodiversitat`,
    descripció: `Realitzarem diferents jocs perquè els nens puguin entendre el concepte de biodiversitat d’una forma divertida.`,
    participantsmin: 15,
    participantsmax: 50,
    edatmin: 9,
    edatmax: 15,
    durada: "2h30/3h",
    objectius: (
      <div>
        <ul>
          <li>
            · Aprendre el concepte de biodiversitat i la relació de diferents
            animals amb el medi.
          </li>
          <li>
            · Fomentar el respecte per allò que ens envolta i de què formem
            part.
          </li>
        </ul>
      </div>
    ),
    material: `Fitxes de trencaclosques fetes en paper i colors, podem portar un joc de fulles plastificades per fer el joc del mocador o podem utilitzar les que trobem al bosc`,
    introducció: `Plantegem una sèrie de jocs de tota la vida adaptats per explicar d’una forma divertida el concepte de biodiversitat als nens i nenes que hi participen.

    Per introduir la gimcana preguntarem si alguna vegada han sentit parlar de la biodiversitat; ens poden sorprendre... Per això, és important que en tinguem ben clar el concepte, la definició, i que l’expliquem de manera molt senzilla perquè permeti fer-se’n una idea a priori. Després, amb els jocs, segur que la idea queda assimilada.`,
    desenvolupament: `Us proposem alguns jocs per realitzar aquesta gimcana, però n’hi ha molts més. 

    Trencaclosques: A cadascun dels nens, els donarem una peça de trencaclosques en blanc i llapis de colors. Els direm que han de dibuixar allò que més els agradi del que estan veient. Al final, quan ajuntem totes les peces, tindrem un exemple clar de biodiversitat. (Per a aquesta prova, és important que cada nen dibuixi sense fixar-se amb el que fa el seu company). 
    
    Joc dels arbres: Amb els nens podem anar a buscar fulles de diferents arbres que tinguem a prop. Quan en tinguem unes 7 o 8 de diferents el monitor ha de dir el nom dels arbres als nens i pot explicar alguna característica de cadascun d’ells. Dividirem el grup en dues parts. Es tracta de jugar al mocador de tota la vida, però en lloc d’agafar un mocador, els nens han d’agafar la fulla que digui el monitor, per exemple: el número dos – pi! I els nens que tenen el número dos han d’identificar la fulla del pi d’entre les altres que estan en el centre del terreny de joc. Guanya qui l’agafa abans. 
    
    Camuflatge: Es tracta de jugar a fet i amagar, però els nens han de camuflar-se amb l’entorn que els rodeja, per exemple: es poden posar fulles per sobre, amagar-se darrere d’un arbust... 
    
    Pèl i ploma: Dividirem el grup en dues parts i farem dues fileres, una enfront de l’altra. Uns seran animals de pèl (p. ex.: gat) i els altres seran animals de plomes (p. ex.: gallina). Quan el monitor digui un animal amb pèl, p. ex.: esquirol, els animals amb plomes hauran de córrer fins el punt de salvament que hagin acordat al principi del joc, perquè els animals de pèl no els agafin. Si algun d’ells és atrapat s’haurà de canviar d’equip. Guanya l’equip que, en acabar el joc, té més individus.`,
    avaluació: `Al final de la gimcana podem preguntar als nens què entenen per biodiversitat i que ens ho expliquin amb les seves paraules.`,
    etiquetes: ["Jocs de pistes i gimcanes", "Exterior"],
  },
  {
    id: 115,
    title: `What's up`,
    descripció: `Joc de pistes o gimcana amb el suport de l’aplicació WhatsApp.`,
    participantsmin: 5,
    participantsmax: 50,
    edatmin: 9,
    edatmax: 18,
    durada: "1h30",
    objectius: (
      <div>
        <ul>
          <li>· Treballar en grup per aconseguir les pistes del joc.</li>
          <li>· Conèixer noves possibilitats d’ús per a WhatsApp.</li>
          <li>
            · Conèixer el funcionament de l’eina o de la creació de grups.
          </li>
        </ul>
      </div>
    ),
    material: `El propi joc de pistes, un smartphone per grup amb WhatsApp`,
    introducció: `Us proposem un joc de pistes amb el suport de l’eina de comunicació per a missatges de mòbil més popular, WhatsApp. Pot ser un recurs molt interessant per fer gimcanes, tant pel barri com a les colònies. Necessitarem tenir cobertura a la xarxa del mòbil per tal de poder comunicar-nos adequadament. Haurem de crear diversos grups d’infants o joves, cadascun dels quals ha de tenir un mòbil amb WhatsApp.`,
    desenvolupament: `Per a un bon funcionament, els monitors necessitarem:

    1.- Tenir els números dels telèfons que utilitzaran els grups.
    2.- Crear un grup de WahtsApp comú a tots els grups per comunicar-nos amb tots alhora.
    3.- El monitor hauria d’anar donant les pistes per separat a cada grup un cop superin una prova o aconsegueixin una resposta;
    
    D’altra banda, ha de poder enviar missatges comuns a tothom amb indicacions o pistes. També els pot anar avisant del temps que queda, del moment de tornar a la ‘base central’ del joc, etc.
    
    Com a exemple de joc de pistes, pensem que estem en una casa de colònies amb l’esplai. Dividim els infants en cinc grups, cadascun dels quals rebrà per WhatsApp un mapa del punt on han de fer la primera prova (cuina, bosc, camp de futbol…). Aleshores, enviarem un missatge a tots els grups dient que comença el joc. Cada grup es dirigirà a la primera prova i, un cop superada, rebrà un missatge amb la pista que els portarà al següent lloc. Amb la superació de cada prova també els podem enviar, per exemple, una lletra, codi, etc. que al final els permeti construir una frase i guanyar el joc.`,
    avaluació: `Amb aquesta organització podem crear tot tipus de jocs, per exemple, per al centre d’interès. A més, el fet d’utilitzar WhatsApp sense dubtes serà un punt molt innovador i atractiu per als infants.`,
    etiquetes: ["Jocs de pistes i gimcanes", "Interior", "Exterior"],
  },
  {
    id: 116,
    title: `Teatret de minititelles`,
    descripció: `Taller d’activitat plàstica amb finalitats d’expressió narrativa i joc.`,
    participantsmin: 1,
    participantsmax: 5,
    edatmin: 4,
    edatmax: 11,
    durada: "1h30/2h",
    objectius: (
      <div>
        <ul>
          <li>· Expressió narrativa dels infants</li>
        </ul>
      </div>
    ),
    material: `Cartolines i folis de colors, 1 caixa de cartró per a sabates, retoladors, llapis de colors i de dibuix, goma d'esborrar, palets rodons de fusta per a cuina tipus "broquetes o pinxos", cinta adhesiva o pega`,
    introducció: `Ens cal haver escollit un conte o narració o haver-ne creat un prèviament.`,
    desenvolupament: `Fem l’escenari: Agafar la caixa de sabates i fer-hi dos forats rectangulars als dos costats més estrets (a fi de poder-hi fer passar els palets de fusta per moure les titelles).

    Decorar el fons de la caixa directament a la mateixa caixa o fent un dibuix i enganxant-lo (per prendre la mida del fons es fa servir la mateixa caixa com a plantilla).
    
    Agafar la tapa de la caixa de sabates i dibuixar per fora un teatrí amb les cortines recollides (obertes). Decorar-lo. 
    
    Fem les titelles: Dibuixem els personatges sobre cartolina, pintem amb retoladors.
    
    Retallem els personatges i els enganxem en un palet rodó de fusta (“pinxo”), amb un tall de cinta adhesiva. Cal situar el palet pel costat del personatge, no per sota (són titelles d’ús lateral). 
    
    Interpretació: Ens aprenem la història i l’expliquem tot interpretant-la, fem entrar les titelles pel costat de la caixa (fent veus dels personatges, fent el narrador, etc.).`,
    avaluació: `Ens permet observar el grau d’expressió i imaginació dels infants.

    Si es fa en grup, valorar i avaluar la capacitat de treball i organització entre ells i elles.
    
    Ens aporta el treball d’atenció vers la interpretació que cadascú fa de la narració, ens permet valorar i posar en comú. Facilita el reconeixement de l’expressió de cadascú i el seu estil propi.`,
    etiquetes: ["Narració i expressió", "Interior"],
  },
  {
    id: 117,
    title: `Ampe: un joc ghanès`,
    descripció: `Joc rítmic molt jugat pels nens ghanesos.`,
    participantsmin: 2,
    participantsmax: 20,
    edatmin: 9,
    edatmax: 15,
    durada: "Sense definir",
    objectius: (
      <div>
        <ul>
          <li>· Tenir coordinació rítmica</li>
          <li>· Conèixer la cultura africana</li>
          <li>· Saber-se concentrar</li>
          <li>· Adquirir detecció de patrons</li>
          <li>· Aleatorització de comportament</li>
          <li>· Recompte mental</li>
        </ul>
      </div>
    ),
    material: `Sense material`,
    introducció: `L'ampe és un joc molt popular entre els nens de Ghana (Àfrica occidental). S'hi juga en grup, tot i que els que realment s'enfronten són només dos jugadors. `,
    desenvolupament: `La parella de jugadors es posa un de cara a l'altre i piquen, cada un d'ells, dues vegades de mans, alhora. Això serveix per sincronitzar els dos jugadors, els quals, després d'haver picat de mans, fan un salt enlaire. Quan els peus tornen a tocar el terra, cada jugador avança una de les seves cames, de forma que tots dos queden drets amb una cama més endavant que l'altra. Si els dos jugadors han avançat la mateixa cama guanya un jugador (que s'ha decidit prèviament), i si els jugadors han avançat cames diferents guanya l'altre jugador (s'ha d'acordar abans de començar la partida). S'hi pot jugar per equips. Per exemple, tenim dos equips de quatre jugadors. Els dos primers jugadors de cada equip fan el primer enfrontament. El jugador que perd el substitueix un altre jugador del seu equip, que s'enfrontarà amb el jugador que ha guanyat, i així successivament. També s'hi pot jugar a punts. Es tracta que la mateixa parella de jugadors faci uns quants enfrontaments seguits, i el primer que guanya deu vegades venç. En aquest cas, és espectacular veure l'habilitat i la pràctica que hi tenen els infants ghanesos. `,
    avaluació: `Aquest joc pot servir per acostar una altra cultura, així com també per treballar la coordinació rítmica. Si juguem a la variant a punts pot servir per treballar la concentració mental i per intentar descobrir quins patrons de comportament segueix el contrincant i, així, poder endevinar quina cama mourà el següent cop. Inversament, servirà perquè intentem aleatorietzar al màxim la nostra seqüència i no seguir cap patró, cosa que és més difícil del que sembla.`,
    etiquetes: [
      "Narració i expressió",
      "Interior",
      "Exterior",
      "Sense material",
    ],
  },
  {
    id: 118,
    title: `Els colors de les emocions`,
    descripció: `Farem barreges de productes químics amb les que treballarem les emocions bàsiques. L'experiment tracta d'observar l'efecte òptic que provoquen els productes quan reaccionen entre sí.`,
    participantsmin: 2,
    participantsmax: 50,
    edatmin: 4,
    edatmax: 15,
    durada: "5 mins - 1h",
    objectiusMoni: (
      <div>
        <ul>
          <li>
            · Conèixer experiments que esdevenen recursos per dinamitzar
            activitats i/o vetllades.
          </li>
          <li>
            · Conscienciar sobre l'aprofitament de les diferents experteses de
            l'equip de monitors/es, en especial la científica.
          </li>
          <li>· Sorprendre els infants. </li>
        </ul>
      </div>
    ),
    objectiusInf: (
      <div>
        <ul>
          <li>· Relacionar emocions i colors.</li>
          <li>
            · Reconèixer les pròpies emocions en el moment d'experimentar-les.
          </li>
          <li>
            · Prendre consciència d'allò que les emocions ens poden ensenyar.
          </li>
        </ul>
      </div>
    ),
    material: `Peixera i/o recipient de vidre transparent d'uns 10 litres de capacitat, sosa càustica, col llombarda, lleixiu o salfumant, vinagre`,
    introducció: `L’aigua que s’obté de bullir la col llombarda és un indicador natural de PH. Amb aquesta propietat provocarem viratges de colors amb diferents productes que podem trobar percasa.`,
    desenvolupament: `Posem a bullir la col llombarda durant uns 30 minuts. Passat aquest temps, l’aigua agafarà un  color  blavós.  Si  no es disposa de foc a l’hora de realitzar l’activitat podem utilitzar un microones. En aquest cas posarem ¼ de col submergida en aigua en un recipient de vidre durant 10 minuts a potència màxima. El líquid resultant, un cop fred, el diluirem en aigua a una proporció de tres gots d’aigua per un de col. Cal fer la barreja en un recipient de vidre transparent.

    En aquest recipient de vidre hi afegirem vinagre que conté àcid acètic. Caldrà afegir-lo a poc a poc fins a obtenir un color lila i, més endavant, rosat si seguim afegint-n’hi. Per obtenir el color vermell afegirem a continuació lleixiu i/o salfumant. Tenint en compte que el lleixiu és més suau i n’haurem d’afegir més per aconseguir el vermell, si utilitzem salfumant amb menys quantitat serà suficient, tot i que sempre podem diluir-lo en aigua.
    
    Quan arribem al color vermell la solució és molt àcida. Així que, per seguir fent altres colors caldrà anar-hi afegint sosa càustica que prèviament haurem diluït en aigua. És recomanable fer una solució amb més sosa i una amb menys, per tal de poder fer canviar el color a poc a poc o més ràpidament segons ens interessi.
    
    A l’afegir-hi sosa, el color vermell començarà a canviar i es faran aigües fosques dins. El viratge de color serà més lent que no pas en els anteriors casos. Mica en mica començarà atornar-se més lila i, posteriorment verd fosc (depenent de la quantitat que n’hi posem acabarà sent d’un color verd més clar). Si seguim afegint-hi una mica més de sosa, als pocs minuts apareixerà el color groc, tot i que pot trigar una mica, ja que la sosa triga un pèl més en actuar.
    
    És molt recomanable fer alguna prova abans, ja que depenent de les concentracions de lleixiu, sosa i vinagre, els colors canviaran d’una forma o d’una altra.
    
    Un cop controlem la “màgia” d’aquests efectes podem realitzar l’actuació. L’idea és crear un ambient càlid on l'experiment tingui un lloc protagonista. Aquest espai ha de permetre que es vagin succeint diferents actuacions (un conte, una cançó, una petita representació, un dibuix en directe, etcètera.) on, utilitzant l’experiment com a transició entre representació i representació, els infants i els joves reconeguin i identifiquin cada emoció proposada amb un color.
    
    Comentaris: S’ha de  vetllar  perquè  els infants no manipulin cap dels productes que s’utilitzaran durant l’experiment ja que són irritants i tòxics. Només els/les dinamitzadors/es de la vetllada ho poden fer.`,
    avaluació: `L’avaluació qualitativa la realitzarem un dia diferent a la realització de l’activitat. Aquesta tindrà  un  objectiu ben marcat: compartir les pròpies emocions. La idea és preparar un espai (preferiblement interior) amb 5 racons que representin cadascun dels colors de les emocions treballades durant la vetllada.

    Un cop tot preparat, convidarem els participants a passar pels diferents racons d’un en un (aquest pas pels diferents espais sempre estarà dinamitzat pels/les monitors/es que condueixin l’activitat). A cada espai llençarem la següent doble pregunta: Algun cop heu sentit. ? Què us va passar mentre l’experimentàveu? I així fins passar per totes les emocions.
    
    Depenent l’edat i el treball emocional dels participants d’aquesta activitat, podem adaptar l’avaluació buscant al- tres elements de recollida d’informació (anònim, a través de paperets que després llegirem, amb imatges ja preparades que puguem enganxar, amb debats oberts, etcètera).  L’important  és fer un recull d’informació, oral i/o escrita, que ens permeti comprovarl’assoliment o no dels objectius plantejats.`,
    etiquetes: ["Vetllades", "Interior"],
  },
  // `Those are my fire activities 🔥`,
  {
    id: 119,
    title: `El país de pedra  🔥`,
    descripció: `Joc de cooperació que servirà per treballar aspectes de la motricitat`,
    participantsmin: 15,
    participantsmax: 30,
    edatmin: 4,
    edatmax: 11,
    durada: "10 mins",
    objectius: (
      <div>
        <ul>
          <li>
            · Treballar l'agilitat, expressivitat, atenció, canvis de rols,
            control tònic etc.
          </li>
        </ul>
      </div>
    ),

    material: `Cintes vermelles i pilotes fluixes`,
    desenvolupament: `Hi ha un país on hi ha uns dimoniets dolents que quan toquen a algú
    amb unes pilotes i diuen alhora "pedra" el converteixen en pedra.
    També hi ha uns angelets protectors que tocant amb la seva "vareta
    màgica" els nens convertits en pedra els alliberen si diuen la paraula
    "lliure" o "salvat". Quatre nens seran els dimoniets i només dos els
    angelets. Aniran corrent en un espai delimitat fins que el monitor digui
    canvi i es canviïn els papers. La vareta màgica serà un mocador
    vermell (per exemple). Els dimoniets no poden tocar els angelets`,
    isHot: true,
    etiquetes: ["Cooperatiu", "Exterior", "Esportiu", "Jocs curts"],
  },
  {
    id: 120,
    title: `Llisca-xanca  🔥`,
    descripció: `Joc competitiu i original que es pot jugar amb molt poc material`,
    participantsmin: 4,
    participantsmax: 20,
    edatmin: 11,
    edatmax: 15,
    durada: "20 mins",
    objectius: (
      <div>
        <ul>
          <li>
            · L'objectiu es treballar l'organització de l'espai, atenció,
            agilitat i força
          </li>
        </ul>
      </div>
    ),

    material: `Xanques de peu, cons i petos(opcional)`,
    desenvolupament: `En un espai delimitat hi ha dos equips asseguts a terra amb una
    xanca de peu petita per nen a cada mà. Es tracta de marcar gol amb
    una pilota de tennis a la zona de gol de l’equip contrari tocant només
    la pilota amb la xanca i lliscant per terra. Els nens es col·loquen a la
    zona de gol i no poden sortir gaire. Si la pilota el toca qualsevol part
    del cos es considera gol del contrari. Es conten els gols.`,
    isHot: true,
    etiquetes: [
      "Cooperatiu",
      "Competitiu",
      "Exterior",
      "Esportiu",
      "Jocs curts",
    ],
  },
  {
    id: 121,
    title: `El llop i les cabretes  🔥`,
    descripció: `Joc entretingut per a que tothom corri una mica i s'ho pasi bé`,
    participantsmin: 14,
    participantsmax: 28,
    edatmin: 4,
    edatmax: 10,
    durada: "15 mins",
    objectius: (
      <div>
        <ul>
          <li>
            · L'objectiu es treballar l'agilitat, expressivitat, rapidesa,
            canvis de rols etc
          </li>
        </ul>
      </div>
    ),
    material: `Cercles`,
    desenvolupament: `Tots els nens estan dins de cercles escampats per la pista menys dos
    que no tenen cercle. Els cercles són les cases de les cabretes. Hi ha
    una cabreta que no té casa i és empaitada pel llop. Quan la cabreta
    sense casa entra a casa d’una altra cabreta, la cabreta que l’ocupava
    surt corrent i ara és ella la que no té casa. Quan el llop toca la
    cabreta es canvien els papers. Si el llop es cansa molt també el
    canviarem. Hem de procurar que surtin a córrer totes les cabretes
    almenys una vegada. Els eliminats tornen a la "vida" quan el seu
    "assassí" és tocat.`,
    isHot: true,
    etiquetes: ["Exterior", "Esportiu", "Jocs curts"],
  },
  {
    id: 122,
    title: `Futbolí humà  🔥`,
    descripció: `Joc competitiu per equips`,
    participantsmin: 8,
    participantsmax: 30,
    edatmin: 8,
    edatmax: 15,
    durada: "30 mins",
    objectius: (
      <div>
        <ul>
          <li>
            · L'objectiu es treballar la col·locació a l'espai, agilitat, força
            i entesa de grup.
          </li>
        </ul>
      </div>
    ),
    material: `Pilota fluixa i 4 cons`,
    desenvolupament: `En espai on hi ha quatre línies gruixudes a terra hi ha dos equips. Els
    equips estan partits ocupant dues línies no consecutives, hi ha la línia
    d’atac i la defensiva, no hi ha porters. Al fons es fan dues porteries
    força amples amb cons. Com en un futbolí els jugadors no poden
    sortir de la línia però si moure’s lateralment per tocar la pilota. Es pot
    fer amb els peus o amb les mans, si es fa amb les mans es fa que no
    val agafar la pilota, només val colpejar-la. Si es fa amb els peus la
    pilota hauria de ser de foam o molt fluixa. Els que cometin infraccions
    estaran un minut penalitzats sense jugar. Es compten els gols.`,
    isHot: true,
    etiquetes: ["Exterior", "Esportiu", "Jocs curts", "Competitiu"],
  },
  {
    id: 123,
    title: `Les pilotes de foc  🔥`,
    descripció: `Joc entretingut per a que tothom corri una mica i s'ho pasi bé`,
    participantsmin: 10,
    participantsmax: 30,
    edatmin: 8,
    edatmax: 12,
    durada: "Depén del grup",
    objectius: (
      <div>
        <ul>
          <li>
            · L'objectiu es treballar la coordinació, agilitat i control tònic
          </li>
        </ul>
      </div>
    ),
    material: `Piques rodones petites, pilotes de tenis. Petos i cercles des d'on surten com a material opcional.`,
    desenvolupament: `És un joc de relleus. Hi ha dos equips. Cada nen té un "plat fondo"
    (pica rodona) a la mà. A uns quants metres hi ha diversos plats
    fondos amb una pilota de tennis a dins. Resulta ser que les pilotes
    cremen molt, són pilotes de foc i només es poden agafar amb els
    plats, no es poden tocar amb les mans perquè ens cremaríem. Els
    nens han de córrer on són els plats, agafar els plats, buidar la pilota
    al seu plat, deixar el plat on hi havia la pilota al seu lloc i tornar a la
    fila amb la pilota on deixaran la deixaran dins d’un cercle. Ho faran en
    relleu fins que s’acabin les pilotes. Després es comptaran les pilotes
    de foc per veure quin equip n’ha agafat més.`,
    isHot: true,
    etiquetes: ["Exterior", "Esportiu", "Competitiu"],
  },

  {
    id: 124,
    title: `La caixa 🔥`,
    descripció: `Joc que es pot dur a terme amb pilota de bàsquet, fútbol o handol`,
    participantsmin: 2,
    participantsmax: 30,
    edatmin: 12,
    edatmax: 18,
    durada: "Depén del grup",
    objectius: (
      <div>
        <ul>
          <li>
            · L'objectiu es treballar la tècnica del llançament en bàsquet i
            organitazció del grup
          </li>
        </ul>
      </div>
    ),
    material: `Pilota de bàsquet i cistella`,
    desenvolupament: `Es col·loquen tots els nens en fila índia davant de la cistella de
    bàsquet. Tiraran tirs lliures per ordre. Si un nen encerta acumula dos
    punts a la cistella, si el nen següent falla es queda aquests dos punts.
    Si encerta el llançament acumula dos punts més que es sumaran als
    que ja hi ha a la "caixa"(cistella). El primer en fallar es quedarà els
    punts acumulats i després es tornarà a partir de zero. Si no hi ha
    punts acumulats i es falla no passa res. Qui arribi primer a vint punts
    (o més, segons s’estableixi abans) queda eliminat. En nens més
    grans es pot fer rebot que dóna una segona opció de llançament i un
    punt per acumular. Aquest joc pot ser jugat en futbol o handbol
    també pel sistema de penals`,
    isHot: true,
    etiquetes: ["Exterior", "Competitiu"],
  },
  {
    id: 125,
    title: `Terra-bol 🔥`,
    descripció: `Joc competitiu molt original i divertit`,
    participantsmin: 8,
    participantsmax: 30,
    edatmin: 8,
    edatmax: 18,
    durada: "10 mins",
    objectius: (
      <div>
        <ul>
          <li>
            · L'objectiu es treballar la força, resistència, flexibilitat,
            orientació espacial i entesa de grup.
          </li>
        </ul>
      </div>
    ),
    material: `Pilota i cons, petos(opcional)`,
    desenvolupament: `Hi ha dos equips en un terreny de joc reduït que llisqui força, un
    passadís ample o un gimnàs és perfecte. Uns cons fan les porteries.
    Els dos equips es col·loquen panxa a terra i s’han de moure amb
    l’impuls dels braços. Es tracta de fer gol colpejant la pilota sense
    agafar-la. Agafar la pilota suposa 1 minut d’expulsió. El principi del
    partit els dos equips es col·loquen a la seva porteria i el monitor tira la
    pilota al mig del camp. Evidentment no val aixecar-se sota cap
    concepte en ple joc. Hi ha una variant que és jugar amb quadrupèdia
    amb els genolls i les mans a terra.`,
    isHot: true,
    etiquetes: ["Interior", "Competitiu", "Jocs curts", "Esportiu"],
  },
  {
    id: 126,
    title: `Els gegants del bàsquet 🔥`,
    descripció: `Joc que competitiu de bàsquet`,
    participantsmin: 12,
    participantsmax: 25,
    edatmin: 15,
    edatmax: 18,
    durada: "30 mins",
    objectius: (
      <div>
        <ul>
          <li>
            · L'objectiu es treballar la força, resistència, agilitat,
            estratègia, llançament de bàsquet i entesa de grup.
          </li>
        </ul>
      </div>
    ),
    material: `Pilota de bàsquet i dues cistelles`,
    desenvolupament: `Es tracta de jugar un partit de bàsquet amb la peculiaritat que per fer
    cistella s´ha d’estar a sobre d’un nen del mateix equip (gegants). Els
    nens que fan de gegants poden desfer-se quan vulguin i tornar-hi
    quan vulguin i tothom pot fer de gegant del bàsquet en algun
    moment del partit. Els rivals no podran tocar els gegants o seran
    castigats amb tres tirs lliures. L'única forma de prendre’ls la pilota és
    saltant i tocant-la. Els gegants no poden fer més de cinc passes amb
    la pilota. La resta de nens jugaran un partit normal però no podran
    fer cistella, es dedicaran a passar la pilota al gegant més ben situat.
    Fer falta a un gegant suposa tres tirs lliures; si els nens es passessin
    de llestos i poguessin veure que és més efectiu pel seu equip
    provocar tres tirs lliures, després caldria tirar-ne cinc o més a criteri
    del monitor.
    `,
    isHot: true,
    etiquetes: ["Exterior", "Competitiu", "Esportiu"],
  },
  {
    id: 127,
    title: `Coast to Coast o Peixos a l'aigua 🔥`,
    descripció: `Joc semblant a "l'aranya peluda", que ens servirà per fer correr i passar una bona estona als nens `,
    participantsmin: 12,
    participantsmax: 30,
    edatmin: 12,
    edatmax: 18,
    durada: "15 mins",
    objectius: (
      <div>
        <ul>
          <li>· L'objectiu es treballar la velocitat i estratègia.</li>
        </ul>
      </div>
    ),
    material: `Sense material`,
    desenvolupament: `A la pista poliesportiva els nens han d´anar d´una àrea de handbol a
    l´altre sense ser tocats per un altre nen que pot moure’s per tot
    arreu menys les àrees. Els que han d'aconseguir l'objectiu són els
    peixos i el perseguidor és el pescador. Al crit de "Peixos a l'aigua!"
    començaran a córrer. Els tocats seran pescadors. No val quedar-se
    dins l´àrea molta estona, es contarà. Al final tots seran perseguidors
    o guanya el darrer a ser atrapat. Per fer el joc més ràpid es pot dir
    que l´últim a entrar a l´àrea perd i ha de fer de perseguidor.`,
    isHot: true,
    etiquetes: ["Interior", "Esportiu", "Jocs curts", "Sense material"],
  },
  {
    id: 128,
    title: `El ràpid 🔥`,
    descripció: `Joc basat en penals que premia l'agilitat de l'infant `,
    participantsmin: 4,
    participantsmax: 20,
    edatmin: 12,
    edatmax: 18,
    durada: "10 mins",
    objectius: (
      <div>
        <ul>
          <li>
            · L'objectiu es treballar l'agilitat, estratègia, rapidesa i
            tècnica.
          </li>
        </ul>
      </div>
    ),
    material: `Pilota i porteria`,
    desenvolupament: `En una porteria de futbol s´hi col·loca un porter i una fila índia de
    nens a fora de l’àrea. Cada nen té cinc punts. Aniran xutant a gol per
    ordre, qui marqui gol torna a la cua i el porter perd un punt. Quan un
    nen falla ha d´anar ràpidament a la porteria a ficar-s´hi de porter. És
    permès xutar molt ràpid encara que el porter no estigui a punt,
    d´aquesta manera no es distreuen i el joc és més àgil. Quan s´arriba
    a zero es queda eliminat. Guanya l´últim. Es pot fer amb el peu o
    amb la mà simulant l´handbol. S’ha de xutar sempre des de fora de
    l’àrea. No es pot fer amb grups molt nombrosos, caldrà partir la
    classe en dos grups i fer-ho un a cada porteria`,
    isHot: true,
    etiquetes: ["Interior", "Exterior", "Esportiu", "Jocs curts"],
  },
  {
    id: 129,
    title: `Endevina, endevina ràpid 🔥`,
    descripció: `Joc de mímica que es pot fer amb una variant competitiva`,
    participantsmin: 4,
    participantsmax: 20,
    edatmin: 8,
    edatmax: 14,
    durada: "Depén de les rondes",
    objectius: (
      <div>
        <ul>
          <li>
            · L'objectiu es treballar les habilitats de mim, memòria i agilitat
            de paraula
          </li>
        </ul>
      </div>
    ),
    material: `Paperets`,
    desenvolupament: `El monitor dóna un paper a un nen amb títols de pel·lícules conegudes,
    artistes coneguts, sèries de TV., objectes, animals,.... Aquest, amb
    mim ha d´intentar que els companys coneguin el títol. Els altres
    poden fer preguntes que només tinguin com a resposta SI o NO. Es
    van canviant de papers a mesura que ho vagin encertant. També es
    pot fer una competició per equips. Cal mantenir un ordre de
    preguntes i respostes i sortirà un membre de cada equip en cada
    tanda. Qui encerti la resposta es queda el paperet. Al final es
    contaran els paperets guanyats.
    `,
    isHot: true,
    etiquetes: ["Interior", "Exterior", "Narració i expressió"],
  },
  {
    id: 130,
    title: `Dansar del passadís 🔥`,
    descripció: `Joc per a treballar la desinihibició i pèrdua de la vergonya del grup d'infants`,
    participantsmin: 6,
    participantsmax: 20,
    edatmin: 4,
    edatmax: 12,
    durada: "Depén de les rondes",
    objectius: (
      <div>
        <ul>
          <li>
            · L'objectiu es treballar la desinihibició personal, dansa i pèrdua
            de la vergonya entre altres.
          </li>
        </ul>
      </div>
    ),
    material: `Tot tipus de roba, cordes, indiaques etc.`,
    desenvolupament: `Amb els bancs suecs o cordes si no en tenim suficients fem un
    passadís. Ens imaginarem que estem en un "passe" de models i els
    nens han de disfressar-se amb qualsevol cosa imitant les top models.
    Pot haver-hi un munt de roba on s´agafen complements ràpidament.
    A partir s'una música marxosa aniran sortint un a un mentre els
    altres aplaudeixen. Es puntuarà l’originalitat, classe i elegància.
    
    `,
    isHot: true,
    etiquetes: ["Interior", "Narració i expressió"],
  },
  {
    id: 131,
    title: `Els caça-papallones 🔥`,
    descripció: `Joc esportiu semblant al "pilla-pilla", però amb una variant més original`,
    participantsmin: 8,
    participantsmax: 25,
    edatmin: 4,
    edatmax: 10,
    durada: "5/10 mins",
    objectius: (
      <div>
        <ul>
          <li>· L'objectiu es treballar l'agilitat, rapidesa i atenció.</li>
        </ul>
      </div>
    ),
    material: `Cercles, el més gran possible`,
    desenvolupament: `Uns quants nens intentaran amb cercles caçar els altres nens. Els
    caçadors són els caça-papallones i els altres papallones que intenten
    escapar perquè no els cacin. Els nens caçats es converteixen en caçapapallones i els que acaben de caçar en papallones. S'aconsella
    utilitzar cercles grans per evitar que es facin mal al coll o al cap.
    `,
    isHot: true,
    etiquetes: ["Exterior", "Esportiu", "Jocs curts"],
  },
  {
    id: 132,
    title: `Els mec-mec 🔥`,
    descripció: `Joc que ajudarà als nens a posar-se en acció i calentar una mica`,
    participantsmin: 12,
    participantsmax: 30,
    edatmin: 4,
    edatmax: 8,
    durada: "Depén del grup",
    objectius: (
      <div>
        <ul>
          <li>
            · L'objectiu es treballar el control tònic, estratègia i
            l'orientació en l'espai
          </li>
        </ul>
      </div>
    ),
    material: `Sense material`,
    desenvolupament: `Aprofitant les línies de la pista poli-esportiva es fa el joc del "comecocos". Els cocos o víctimes van caminant, no corrent, sobre les línies
    marcades al terra. Un nen o dos (els MEC-MEC) surten d´un extrem
    de la pista caminant per sobre les mateixes línies amb les mans 
    `,
    isHot: true,
    etiquetes: ["Exterior", "Esportiu", "Sense material"],
  },
  {
    id: 133,
    title: `El codi secret 🔥`,
    descripció: `Joc a grups, per a treballar la confiança en altres companys i tambè la motricitat sense fer ús de la vista`,
    participantsmin: 2,
    participantsmax: 15,
    edatmin: 10,
    edatmax: 16,
    durada: "10 mins",
    objectius: (
      <div>
        <ul>
          <li>
            · L'objectiu es treballar l'utilització de sentits, entesa de grup i
            estratègia.
          </li>
        </ul>
      </div>
    ),
    material: `Paper`,
    desenvolupament: `Dos grups. Cada grup tria un component que farà de titella amb els
    ulls tapats. Sense utilitzar les paraules: endavant, endarrera,
    esquerra, dreta o similars hauran d´inventar un codi secret perquè el
    titella pugui agafar un tresor que el monitor col·locarà al terreny de joc.
    La resta del grup estarà en una zona que no podran travessar. Cada
    grup sortirà d´una punta. El que agafi abans el tresor guanya. El codi
    pot ser donat pel monitor abans de començar. Per exemple: endavant -
    cotxe; endarrera - camió; para - bicicleta; etc..
    `,
    isHot: true,
    etiquetes: ["Exterior", "Interior", "Jocs Curts", "Cooperatiu"],
  },
  {
    id: 134,
    title: `El punt més proper 🔥`,
    descripció: `Joc curt per a treballar l'orientació espacial`,
    participantsmin: 2,
    participantsmax: 20,
    edatmin: 10,
    edatmax: 16,
    durada: "10 mins",
    objectius: (
      <div>
        <ul>
          <li>· L'objectiu es treballar l'orientació espacial</li>
        </ul>
      </div>
    ),
    material: `Cinta pels ulls`,
    desenvolupament: `Amb els ulls tapats els nens hauran de posar un objecte el més a
    prop possible d´una línia dibuixada a terra. Abans hauran contat les
    passes i s´ho hauran mirat bé. El que es passa queda eliminat. Ho
    faran un per un. Cadascú haurà de buscar el codi propi que més bé li
    vagi per aconseguir l'objectiu: passes juntes, passes separades,
    pams, etc..
    `,
    isHot: true,
    etiquetes: ["Exterior", "Interior", "Jocs Curts"],
  },
  {
    id: 135,
    title: `Bombes fora! 🔥`,
    descripció: `Joc esportiu molt interesant que consisteix en tenir el mínim de pilotes possible al teu propi camp`,
    participantsmin: 12,
    participantsmax: 30,
    edatmin: 8,
    edatmax: 16,
    durada: "5/10 mins",
    objectius: (
      <div>
        <ul>
          <li>
            · L'objectiu es treballar la resistència, força, agilitat i
            rapidesa.
          </li>
        </ul>
      </div>
    ),
    material: `Moltes pilotes, indiaques, etc.`,
    desenvolupament: `Dos equips. Cada equip té un terreny de joc. A cada terreny hi ha el
    mateix nº de pilotes de tot tipus que seran les bombes. En un temps
    determinat han de treure totes les bombes que tinguin al seu camp i
    tornar les que els arribin. Passat el temps guanya l´equip que tingui
    menys bombes. No val xutar les pilotes. També poden haver-hi
    indiaques o altres tipus de material.
    `,
    isHot: true,
    etiquetes: ["Exterior", "Interior", "Jocs Curts", "Esportiu"],
  },
  {
    id: 136,
    title: `Duel a tres metres 🔥`,
    descripció: `Joc competitiu per equips, variant del mocador amb pilotes`,
    participantsmin: 8,
    participantsmax: 20,
    edatmin: 12,
    edatmax: 18,
    durada: "Depén del grup",
    objectius: (
      <div>
        <ul>
          <li>
            · L'objectiu es treballar la rapidesa, força, agilitat, equilibri i
            punteria.
          </li>
        </ul>
      </div>
    ),
    material: `Pilotes fluixes i cercles`,
    desenvolupament: `Dos equips. Es numeren i es col.loquen a uns vint metres cara a cara.
    A la mateixa distància dels uns i dels altres hi haurà una pilota per
    cada equip dins d´un cercle. Quan el monitor digui un nº qui tingui el nº
    sortirà corrent (com en el mocador) fins a agafar la pilota del cercle i
    llançar-la contra el rival del mateix nº que estarà a uns tres metres.
    No val sortir del cercle per llançar la pilota ni per esquivar el "tret". Es
    puntuen els encerts de cada equip.
    `,
    isHot: true,
    etiquetes: ["Exterior", "Interior", "Competitiu", "Esportiu"],
  },
  {
    id: 137,
    title: `El joc dels noms 🔥`,
    descripció: `Joc semblant al pistoler, per a que es infants es coneguin entre ells`,
    participantsmin: 12,
    participantsmax: 30,
    edatmin: 4,
    edatmax: 18,
    durada: "5-15 mins",
    objectius: (
      <div>
        <ul>
          <li>
            · L'objectiu es treballar la velocitat de reacció, rapidesa de
            paraula i arribar a conèixer millor als teus companys
          </li>
        </ul>
      </div>
    ),
    material: `Cercle`,
    desenvolupament: `Cercle. Un nen està al centre i diu un nom d´un nen alhora que el
    senyala, el nen al.ludit seurà a terra ràpidament, els del voltant es
    senyalen i es diuen el nom el més ràpid possible. El que triga més a
    reaccionar ha de seure a terra. Els eliminats resten asseguts a terra
    per complicar més el joc en els que encara estan drets. Al final només
    en queden dos. D'entre aquests dos s'escollirà mitjançant sorteig qui
    anirà al mig la propera vegada que s'hi jugui.
    `,
    isHot: true,
    etiquetes: ["Exterior", "Interior", "Coneixença"],
  },
  {
    id: 138,
    title: `Joc de la seducció 🔥`,
    descripció: `Joc de "seducció" que servirà per desinhibirse una mica i perdre la vergonya`,
    participantsmin: 12,
    participantsmax: 30,
    edatmin: 8,
    edatmax: 18,
    durada: "10 mins",
    objectius: (
      <div>
        <ul>
          <li>
            · L'objectiu es treballar l'orientació espacial, entesa de grup,
            observació i atenció.
          </li>
        </ul>
      </div>
    ),
    material: `Sense material`,
    desenvolupament: `En un cercle hi ha parelles; un davant i l´altre darrera a mig metre.
    Dos nens no tenen parella. Per aconseguir parella hauran de picar
    l´ullet a els nens que estiguin davant. Quan aquests rebin el missatge
    aniran a formar parella amb els que els han cridat. Si el de darrera
    veu la intenció pot retenir la seva parella sense moure´s del lloc. Si
    queda sense parella haurà de picar l´ullet a algú per aconseguir-ne.
    Per motivar se´ls dirà (vigilant molt!) que els de davant són les
    dones de la parella i els de darrera els homes. Es canviaran els
    papers de tant en tant.   
    `,
    isHot: true,
    etiquetes: [
      "Exterior",
      "Interior",
      "Coneixença",
      "Narració i expressió",
      "Sense material",
    ],
  },
  {
    id: 139,
    title: `Espatlleres ocupades 🔥`,
    descripció: `Joc molt interesant per treballar l'equilibri, amb diferents variant de dificultat.`,
    participantsmin: 10,
    participantsmax: 30,
    edatmin: 8,
    edatmax: 18,
    durada: "Depén del grup",
    objectius: (
      <div>
        <ul>
          <li>· L'objectiu es treballar la força i l'equilibri.</li>
        </ul>
      </div>
    ),
    material: `Espatlleres, bancs suecs, etc.`,
    desenvolupament: `A cada extrem de les espatlleres es situa un grup de nens. Al senyal
    començaran a pujar per ordre intentant arribar fins al final contrari de
    les espatlleres. Quan es creuin amb els altres no es podran tocar de
    cap manera ni desestabilitzar-se. Se'ls dirà que a terra hi ha cocodrils
    per motivar el fet de no ficar el peu a terra. Per baixar i fer-ho més
    motivant es poden col·locar bancs suecs en forma de tubogan i
    matalassos. Poden transportar alguna cosa per fer-ho més
    interessant i difícil de fer, per exemple una pilota de tennis o un
    cercle.  
    `,
    isHot: true,
    etiquetes: ["Interior", "Esportiu"],
  },
  {
    id: 140,
    title: `Pausa-play 🔥`,
    descripció: `Joc de teatre original`,
    participantsmin: 8,
    participantsmax: 20,
    edatmin: 8,
    edatmax: 18,
    durada: "Depén del grup",
    objectius: (
      <div>
        <ul>
          <li>· L'objectiu es treballar l'expressivitat i el control tònic.</li>
        </ul>
      </div>
    ),
    material: `Com a material opcional elements per a disfressar-se.`,
    desenvolupament: `Per grups de tres o quatre nens s´organitzen petites represenatcions
    de teatre d´un o dos minuts com a molt. Les escenes poden ser de la
    vida quotidiana o de qualsevol pel.lícula o sèrie de dibuixos animats.
    Després per ordre cada grup representarà la seva escena davant dels
    altres. Per ordre els nens que mirin l´escena aniran dient "Pausa" i
    "Play" per parar i engegar "la imatge" del que estan veient en la tele
    connectada al vídeo. Les pauses poden durar uns tres segons i les
    escenes seran sempre amb càmara lenta per ajudar a les pauses i
    perquè sigui més divertit. 
    `,
    isHot: true,
    etiquetes: ["Interior", "Narració i expressió"],
  },
  {
    id: 141,
    title: `Les capsetes 🔥`,
    descripció: `Joc d'expressió per a un grup d'infants d'una edat petita.`,
    participantsmin: 8,
    participantsmax: 30,
    edatmin: 4,
    edatmax: 8,
    durada: "10 mins",
    objectius: (
      <div>
        <ul>
          <li>· L'objectiu es treballar l'expressivitat.</li>
        </ul>
      </div>
    ),
    material: `Sense material.`,
    desenvolupament: `És per nens força petits. Estan escampats per l´espai. Quan el monitor
    diu: -"Capsetes!"; tots s´ajupiran simulant unes capses. Després el
    monitor dirà:- "dins de les capses hi ha ....(qualsevol cosa, per exemple
    uns lleons). Tots els nens imitaran ser lleons fins a rebre noves
    instruccions per a convertir-se en capsetes per després tornar-hi. Es
    pot fer amb sons o callats, amb figures estàtiques o en moviment.
    
    `,
    isHot: true,
    etiquetes: [
      "Interior",
      "Narració i expressió",
      "Jocs curts",
      "Sense material",
    ],
  },
  {
    id: 142,
    title: `Els vaixells ("hundir la flota") 🔥`,
    descripció: `Variant del joc "hundir la flota" en la qual els infants mateixos faràn de torpedos, vaixells i capitans.`,
    participantsmin: 20,
    participantsmax: 30,
    edatmin: 12,
    edatmax: 18,
    durada: "Depén del grup",
    objectius: (
      <div>
        <ul>
          <li>· L'objectiu es treballar l'estratègia i entesa de grup</li>
        </ul>
      </div>
    ),
    material: `Boli, papers ja fets, bancs suecs i matalassos.`,
    desenvolupament: `Dos grups jugaran al joc dels vaixells però sent ells mateixos els
    torpedos, vaixells i capitans. Per jugar amb més de vint nens. Cada
    equip tindrà dos papers-requadres, en un hi apuntaran on es troben
    els seus propis vaixells (triaran les coordenades de la "e" al nº 5) i en
    l´altre anotaran els trets que tiren a l´enemic (caldrà un bolígraf) .
    Segons el nombre de nens per equip es faran més o menys vaixells.
    Cada membre (part) de cada vaixell tindrà un paperet on s´indicarà
    en quina posició es troba. Aquest paper només l´haurà d´ensenyar
    en el moment que és enfonsada la part de vaixell que ell representa
    (p.ex: b4). Els capitans, per ordre, diran una coordenada, si és vàlida
    per tocar una part de vaixell el nen de l´altre equip que la tingui
    ensenyarà el paper i el torpedo xocarà contra ell i restarà assegut. Si
    la coordenada és aigua també sortirà un torpedo però caurà a terra
    (matalàs) prop dels vaixells contraris. No és necessari que els vaixells
    es col·loquin com si estiguessin sobre un requadre, poden col·locar-se
    com vulguin però sempre units entre les seves parts. Un llançament
    que toca té dret a conservar el torn. Cada vegada sortirà un torpedo
    diferent dels dos que té cada equip. Equivalències segons el nº de
    nens: 1- 15 nens . grup = 1 vaixell de 5; 1 de 4; 1 de 3 + 2 torpedos
    + 1 capità. 2- 14 nens . grup = 1 vaixell de 5; 1 de 4; 1 de 2 + 2
    torpedos + 1 capità. 3- 13 nens . grup = 1 vaixell de 5; 1 de 3; 1 de
    2 + 2 torpedos + 1 capità. 4- 12 nens . grup = 1 vaixell de 4; 1 de 3;
    1 de 2 + 2 torpedos + 1 capità. 5- 11 nens . grup = 1 vaixell de 4; 2
    de 2 + 2 torpedos + 1 capità. 6- 10 nens . grup = 1 vaixell de 3; 2
    de 2 + 2 torpedos + 1 capità.
    Novetat :Taulell de joc, baixa-te'l i imprimeix-lo amb Excel
    També tens les etiquetes per jugar-hi! imprimeix-les i juga-hi més
    fàcilment.
    `,
    isHot: true,
    etiquetes: ["Interior", "Narració i expressió", "Competitiu"],
  },
  {
    id: 143,
    title: `Buscant a algú que... 🔥`,
    descripció: `Joc semblant als veïns o la carta de l'emperador, més mogut. Bo per treballar la pèrdua de la vergonya i el coneixement de grup`,
    participantsmin: 10,
    participantsmax: 50,
    edatmin: 8,
    edatmax: 18,
    durada: "Depén del grup",
    objectius: (
      <div>
        <ul>
          <li>
            · L'objectiu es treballar el coneixement del grup i la pèrdua de
            vergonya
          </li>
        </ul>
      </div>
    ),
    material: `Papers i bolis`,
    desenvolupament: `El monitor reparteix uns fulls que diuen BUSCA A ALGÚ QUE.. i diferents
    frases com: -hagi nascut el mateix mes que tu; -li agradin els
    dibuixos animats; -el seu nom (o algun cognom) comenci amb la
    mateixa lletra que el teu nom o cognoms; -tingui els ulls blaus; -porti
    ulleres; -tingui les sabates negres; -hagi anat en avió; -hagi dormit
    en tenda d’acampar; - que tingui dos germans; que tingui el mateix
    nº de peu que tu; etc.. . el difícil és que no val repetir ningú i s´ha
    d´omplir el full el més ràpid possible. Al final es posen les dades en
    comú. Caldrà fer diferents models de fulls per evitar que s´ho copïn.
    `,
    isHot: true,
    etiquetes: ["Interior", "Exterior", "Coneixença"],
  },
  {
    id: 144,
    title: `L'ós dormilega 🔥`,
    descripció: `Joc molt interesant que premia l'agilitat i la paciència combinant un punt esportiu.`,
    participantsmin: 8,
    participantsmax: 20,
    edatmin: 4,
    edatmax: 12,
    durada: "15 mins",
    objectius: (
      <div>
        <ul>
          <li>
            · L'objectiu es treballar la velocitat de reacció, la paciència i
            l'expressivitat
          </li>
        </ul>
      </div>
    ),
    material: `Matalàs`,
    desenvolupament: `Un nen és un ós que està hivernant en una cova, està estirat en un
    matalàs. Resulta ser que la resta dels animalons del bosc són molt
    empipadors i volen despertar al pobre ós. Tots els nens s'acostaran a
    l'ós i el molestaran. De cop i volta l'ós es despertarà i perseguirà els
    animalons que l'empipin. Quan els animalons arribin a un punt
    establert l'ós no els podrà atrapar. Els atrapats poden ser óssos o
    restar eliminats a criteri del monitor.    
    `,
    isHot: true,
    etiquetes: ["Interior", "Exterior", "Jocs curts"],
  },
  {
    id: 145,
    title: `Joc del revés 🔥`,
    descripció: `Joc original semblant al "Simón dice"`,
    participantsmin: 4,
    participantsmax: 20,
    edatmin: 4,
    edatmax: 18,
    durada: "Depén del grup",
    objectius: (
      <div>
        <ul>
          <li>· L'objectiu es treballar l'atenció i la velocitat de reacció</li>
        </ul>
      </div>
    ),
    material: `Sense material`,
    desenvolupament: `El monitor diu ordres que els nens han d´interpretar al revés. S´eliminen
    els nens que no canviin l´acció al revés. Guanyen els últims en
    eliminar-se. Quan més grans siguin més complicat se'ls pot fer. És
    ideal com a tornada a la calma i els agrada moltíssim.   
    `,
    isHot: true,
    etiquetes: ["Interior", "Exterior", "Jocs curts", "Sense material"],
  },
  {
    id: 146,
    title: `Les pilotes amagades  🔥`,
    descripció: `Joc per treballar la memòria visual i aspectes no relacionats amb motricitat de l'infant`,
    participantsmin: 10,
    participantsmax: 30,
    edatmin: 4,
    edatmax: 12,
    durada: "Depén del grup",
    objectius: (
      <div>
        <ul>
          <li>
            · L'objectiu es treballar la memòria visual, agilitat, orientació
            espacial.
          </li>
        </ul>
      </div>
    ),
    material: `Piques rodones petites, pilotes de tenis i cercles.`,
    desenvolupament: `Hi ha dos grups que fan dues files al mig de la pista encarats a la
    mateixa àrea de penal. Dins d'aquesta àrea hi ha escampats una
    trentena de cons petits rodons (plats fondos) col·locats al revés de
    manera que es pugui ficar una pilota a dins sense ser vista. El monitor
    haurà col·locat quinze pilotes de tennis dins dels cons girats. A l'ordre
    de començar sortiran en relleus corrent fins a l'àrea, una vegada
    arribin a dins tenen cinc segons per obrir un plat, agafa la pilota si
    n'hi ha i tornar. En cas de trobar pilota la deixa dins un cercle a prop
    de la fila. Només poden obrir un plat per torn i hauran de vigilar que
    no obrin cap plat ja obert amb anterioritat perquè no hi haurà cap
    pilota. Si no hi ha cap pilota tornaran a fer el relleu tan ràpid com
    puguin per no perdre temps. L'equip que trobi més pilotes guanya.
    Una variant és que un equip col·loca les pilotes mentre l'altre està
    d'esquena, pot col·locar dues pilotes en un mateix plat, serà la
    sorpresa doble. En aquest cas es pot cronometrar quan triga l'equip
    que obre els "plats". En nens molt petits no té sentit cronometrar
    perquè encara no entenen el concepte de temps.
    `,
    isHot: true,
    etiquetes: ["Exterior", "Esportiu", "Competitiu"],
  },
  {
    id: 147,
    title: `Caça de rebot 🔥`,
    descripció: `Joc mogut molt semblant al mataconills`,
    participantsmin: 12,
    participantsmax: 30,
    edatmin: 8,
    edatmax: 18,
    durada: "20/30 mins",
    objectius: (
      <div>
        <ul>
          <li>
            · L'objectiu es treballar la velocitat, punteria, agilitat i
            estratègia.
          </li>
        </ul>
      </div>
    ),
    material: `Pilota que boti o pilota tova.`,
    desenvolupament: `És un joc de persecució amb pilota tipus el popular mata-conills.
    Tothom "para" quan té la pilota i guanya l´últim a quedar viu,
    s´eliminen els tocats. Per tocar s´ha de fer rebotar la pilota al terra o
    en una paret abans de tocar el perseguit. També es pot fer com a
    variant del joc de matar conills o el joc de pilotes salvadores i
    matadores. Quan no es disposa de pilotes toves va bé fer el rebot per
    evitar que es facin mal. Els eliminats tornen a la vida quan és tocat
    qui els havia matat abans. Hi ha molt moviment.    
    `,
    isHot: true,
    etiquetes: ["Exterior", "Esportiu"],
  },
  {
    id: 148,
    title: "Alouette",
    descripció:
      "Rotllana de persones que van circulant en sentit horari i es van tocant les diferents parts del cos a mesura que la cançó les va enumerant.",
    edatmin: 4,
    edatmax: 8,
    lletra: `La cançó es comença a cantar mentre tota la rotllana va girant en sentit horari, però quan diu “jo t’esquilaré el clatell...”
    cal que tots toquin el clatell del company que tenen a la seva dreta. I quan la cançó repeteix “jo t’esquilaré el clatell...” tocaran
    el clatell del company de l’esquerra. I el mateix amb la repetició d’ “el clatell”, “el clatell”. I quan la cançó diu “Alouette”, “alouette”
    caldrà batre els braços com si fóssim ocells. La idea és que a cada ronda s’anomeni una part del cos diferent.

    Una possible variant és, en lloc de fer una sola part del cos per ronda, afegir-n’hi una més. És a dir, a mesura que la cançó va avançant anem
    sumant parts del cos i així els participants han d’anar de bòlit tocant ara a la dreta, ara a l’esquerra, ja que cada vegada la llista és més llarga.
    
    Com que es tracta d’una dansa és força recomanable que hi participi com més gent millor. És important que els participants tinguin respecte pels seus companys, ja que si no es poden acabar fent mal. Cal tocar, no colpejar.
    Pot ser interessant explicar als participants que vol dir oreneta en francès. Així entendran per què baten les ales com ocells.
    
    Amb aquesta dansa es poden trobar valors com la confiança, el respecte, l’alegria, la participació, etc. Lletra:

     “Alouette”, gentil “alouette”.
     “Alouette”, jo t’esquilaré.
     Jo t’esquilaré el clatell,
     jo t’esquilaré el clatell.
     El clatell, el clatell.
     “Alouette”, “alouette”. (Se substitueix “el clatell” pel melic, el genoll, etc.)`,
    desenvolupament: "",
    avaluació: "",                            
    url: "qNhIcfszeDQ",
    isSong: true,
    etiquetes: ["Animació infantil"],
  },
  // {
  //   id: 149,
  //   title: "El zoo de la disbauxa",
  //   descripció:
  //     "Rotllana de persones que es van aixecant i canviant de lloc quan senten el nom que els ha estat assignat.",
  //   edatmin: 4,
  //   edatmax: 8,
  //   lletra: `El joc està basat en un text escrit especialment per a l’ocasió. En aquest cas, s’ha redactat a partir del llibre El zoo d’en Pitus. Els infants s’asseuran en rotllana i s’aniran aixecant i canviant de lloc quan sentin el nom que els ha estat assignat.`,
  //   desenvolupament: `Els infants seuen en rotllana i s’assigna a cadascú el nom d’un animal / personatge. Es comença a llegir el text i quan cada infant sent el nom del personatge que li ha estat assignat ha de córrer a canviar-se de lloc amb els companys que tenen la mateixa assignació que ell.

  // En cas que algú quedi sense lloc caldrà que s’esperi al mig de la rotllana per tal que quan algú altre s’aixequi pugui recuperar el lloc.
  
  // Si en algun moment s’anomena un mot de col·lectivitat, en aquest cas seria la paraula ZOO, tothom s’ha d’aixecar i canviar-se de lloc. 
  
  // A continuació us presentaré els animals del nostre zoo.
  
  // En primer lloc tenim les sargantanes. Són presumides i molt femenines. La veritat és que mai no es treuen el llacet que porten penjat a la cueta, i és que les sargantanes són els animals més fatxendes de tot el zoo.
  
  // A continuació tenim les rates de claveguera. Sempre van brutes. I no cregueu que els importa gaire la pudor que fan, perquè les rates de claveguera estan tan acostumades a viure entre la brutícia que els és ben igual el que pensin d’elles la resta d’animals.
  
  // No ens podem oblidar de les llagostes. Tot el dia amunt i avall, vinga saltar per allà i saltar per aquí com si fossin un saltamartí. Però si voleu saber un secret, les llagostes estan bojament enamorades de les sargantanes, i si salten és per impressionar-les.
  
  // Pel que fa a les papallones, viuen molt felices. Penseu que abans eren uns llefiscosos cucs de seda, però ara, amb la patxoca que fan, no deixen mai d’exhibir tots els colors que els ha regalat la mare naturalesa.
  
  // Continuem amb els pardals. Aquests sí que són trapelles. No fan altra cosa que volar d’una banda a l’altra del zoo empipant els altres animals. Segons ells, ho fan perquè si no s’avorririen sols volant pel cel. Aix, mare meva, no sé què en farem, d’aquests pardals.
  
  // Dels garrins, què voleu que us digui. Són bruts de cap a peus, això sí, no tant com les rates de claveguera, perquè ells són molt vergonyosos i intenten sempre rentar-se, però com que ho fan en el fang, els garrins mai no estan nets.
  
  // Per acabar tenim els més terribles del nostre zoo, els tigres, que cal tenir-los ben tancats en gàbies, ja que si no es menjarien la resta d’animals. I és que els tigres sempre tenen gana.
  
  // Però bé, potser seria interessant que us expliqués què va passar exactament en aquest zoo, ja que si no no sabreu mai per què us explico aquesta història.
  
  // Tot va començar quan les llagostes, que sempre estaven enamorades de les presumides sargantanes, van parlar amb les papallones, per tal que aquestes els expliquessin quin era el secret de la bellesa de les sargantanes, però és clar, com sempre, els pardals que volaven per tot el zoo van sentir la conversa entre les llagostes i les papallones i la van anar a explicar als garrins, que en aquell moment estaven discutint amb les rates de claveguera sobre qui era més net dels dos. Però és clar, aquí els qui més s’avorrien eren els tigres, que amb tanta xerrameca estaven morts de gana. I quan van veure passar per davant de la seva gàbia una sargantana, van decidir llançar-s’hi al damunt, i en sentir-ho, les llagostes van saltar damunt els tigres, que s’espolsaven de la cara les papallones i els pardals, que intentaven distreure’l, mentre els garrins i les rates de claveguera ajudaven les sargantanes a fugir de les urpes del gros animal, que les havia agafades. I va ser així com el tigre va tornar a la seva gàbia i les papallones, els pardals, els garrins i les rates de claveguera van tornar a les seves tasques habituals, mentre les llagostes i les sargantanes vivien per sempre més felices menjant anissos i perdius en aquell bonic i bucòlic zoo.`,
  //   avaluació: `Atès que es tracta d’una activitat col·lectiva és força recomanable que hi participi com més gent millor. És important que els participants tinguin respecte pels seus companys, ja que si no es poden acabar fent mal. És molt interessant que els participants desenvolupin l’activitat en silenci per tal de poder sentir la veu del narrador.

  // Pot ser interessant que en acabar l’activitat es repassi amb els infants quin personatge els ha estat assignat i quin paper juga dins la història que han llegit a classe prèviament, o si encara no ho han fet, se’ls pot introduir el paper dels diferents personatges dins la història que llegiran.
  
  // Caldrà que l’activitat sempre estigui referenciada en algun llibre.
  
  // Serà necessari un director de joc.`,
  //   isSong: true,
  //   etiquetes: ["Animació infantil"],
  // },
  // {
  //   id: 150,
  //   title: "Salta, salta, salta",
  //   descripció:
  //     "Un escampall de persones segueixen els passos del que indica la cançó.",
  //   edatmin: 4,
  //   edatmax: 8,
  //   lletra: `Boing, Boing, boing, boing, boing, boing
  // Salta, salta, salta, salta sense parar,                 Do, Sol
  // salta, salta, salta i una volta has de donar.           Fa, Do
  // Salta, salta, salta, salta sense parar,                 Do, Sol
  // salta, salta, salta i un company has de trobar.         Fa, Do
  // Salten les formigues, salten els gripaus.               Fa, Do
  // Salten les granotes i també els elefants.               Sol, Do
  // Salten les formigues, salten els gripaus.               Fa, Do
  // Dóna una volta i torna a començar.                      Sol, Do`,
  //   desenvolupament: `La cançó es comença a cantar mentre tots els participants van saltant i donant voltes sense cap direcció concreta per tot l’espai seguint les indicacions que els va donant la lletra de la cançó, fins que diu un company has de trobar. Llavors, agafant les mans de la parella que han trobat, es van ajupint o saltant en funció de si l’animal que apareix és petit o gran. Tot acaba quan tornen a donar una volta i es disposen a seguir saltant per l’espai.

  // Una possible variant és acabar la cançó dient una rotllana entre tots hem de formar, cosa que ens pot ajudar a fer una rotllana o bé, si ho preferim, una fila.`,
  //   avaluació: `Com que és una dansa, és força recomanable que hi participi com més gent millor. És important que els participants tinguin respecte pels seus companys, ja que, si no, es poden acabar fent mal. Cal saltar sol, no contra els altres.

  // Pot ser interessant fer un concurs de voltes de parella per tal d’estimular la creativitat dels participants. Amb aquesta dansa es poden trobar valors com la confiança, el respecte, l’alegria, la participació, etc. `,
  //   isSong: true,
  //   etiquetes: ["Animació infantil"],
  // },
  {
    id: 149,
    title: "El patatuf",
    descripció:
      "És una dansa popular catalana que es ballava a la comarca del Baix Llobregat. Hi ha diferents variants o danses similars en comarques properes com el Penedès i el camp de Tarragona. Sembla ser que el seu nom deriva de les palmes que es feien a l’inici de la dansa.",
    edatmin: 4,
    edatmax: 11 ,
    lletra:"",
    desenvolupament: `A la primera frase musical (A) es fan tres palmes (equivalents a un temps cadascuna), una pausa (d’un temps de negra) i tres aplaudiments més. 
    A la segona frase (B) es fa un punteig, primer amb el peu dret, al costat, al lloc, per davant i amb els peus junts, i després el mateix amb el peu esquerre. 
    A la tercera frase (C) les parelles s’agafen de les mans i el nen fa un rístol per sota dels seus braços a la nena, primer en sentit contra horari i després en sentit horari, mantenint-se agafats de mans. 
    A la quarta i última frase (C '), les parelles es donen la mà dreta i donen una volta sencera en sentit horari, desplaçant-se seguidament en sentit horari i canviant de parella per reprendre la dansa.`,
    isSong: true,
    avaluació: `És una dansa que afavoreix la cohesió del grup i la relació entre els nens. Aquesta dansa potencia la coordinació corporal amb el moviment marcat per la música.

    S’ha de tenir en compte que aquesta dansa, com totes les danses, és per gaudir i passar un bon moment, per tant si hi ha cap infant que no vol participar de la dansa se l’ha de tenir en compte i no forçar-lo a ballar, es poden buscar altres alternatives per fer-lo participar en la dansa. Pot acompanyar amb les palmes marcant la pulsació de la música, també es pot ser espectador. No sempre hem d’estar tots ballant.`,
    url:"6_NOROrheIs",
    etiquetes: ["Danses"],
  },
  {
    id: 150,
    title: "Ball francès",
    descripció:
      "Ball de rotllana on els infants van canviant de parella. Per tant, afavoreix la cohesió de grup i la relació entre infants.",
    edatmin: 4,
    edatmax: 18,
    desenvolupament: `Posició inicial: en cercle, amb les mans agafades i mirant al centre.

    Blocs de moviment:
    
    A)Vuit temps saltant a pas de galop en sentit contra horari.
    
    B)Quan comença el segon temps melòdic, es marca amb la parella, que hi ha al costat, un petit punteig (dreta i esquerra) i seguidament es pica de mans tres cops seguits. Això es repeteix dues vegades consecutives. Finalment, es fan dos rístols seguits amb la parella per tal de canviar de posició. (Si no volem que canviïn de parella poden fer rístols amb aquesta).
    
    L’estructura d’A i B es repeteix consecutivament segons les tirades que tingui la música.`,
    avaluació:`És una dansa que afavoreix la cohesió del grup i la relació entre els nens. Aquesta dansa potencia la coordinació corporal amb el moviment marcat per la música.

    S’ha de tenir en compte que aquesta dansa, com totes les danses, és per gaudir i passar un bon moment, per tant si hi ha cap infant que no vol participar de la dansa se l’ha de tenir en compte i no forçar-lo a ballar, es poden buscar altres alternatives per fer-lo participar en la dansa. Pot acompanyar amb les palmes marcant la pulsació de la música, també es pot ser espectador. No sempre hem d’estar tots ballant.`,
    isSong: true,
    url:"AQltoIzlWsU",
    etiquetes: ["Danses"],
  },
  {
    id: 151,
    title: "El petit vailet",
    descripció:
    "Nadala tradicional",
    edatmin: 4,
    edatmax: 18,
    lletra:`Jo soc el petit vailet cansadet de molt camí,
    vinc amb el meu gaiatet per veure jesús diví.
    Xerram pim, xerram pim, xerria pia...
    Xerram pim, xerram pim, xerria pó...
    xerrampim que josep i maria tenen un petit minyó.
    
    He portat la carmanyola
    tota plena de vi blanc
    i una llarga llangonissa
    per Jesús el bell infant.
    Xerram plim, xerram plim, xerram pia,
    xerram plim, xerram plim, xerram po,
    xerram pim que Josep i Maria
    tenen un petit Minyó.
    
    Aquí van aquestes calces
    que me'n va donar l'hereu
    serviran per abrigar-vos
    que són de molt gros piteu.
    Xerram ...
    
    Si portés jo més recapte
    també seria per vös.
    Heu's aquí el gaiat que porto
    que és de cirerer d'arboç.
    Xerram ...`,
    isSong: true,
    url:"OYmH4K7GWVA",
    etiquetes: ["Nadales", "Tradicionals"],
  },
  {
    id: 152,
    title: "El rabadà",
    descripció:
    `Nadala titulada "El Rabadà"`,
    edatmin: 4,
    edatmax: 18,
    lletra:`A Betlem me'n vull anar (2)
    vols venir tu, rabadà? (2)
    -Vull esmorzar!
    
    -A Betlem esmorzarem (2)
    i a Jesús arribarem (2)
    -I amb neu hi anirem?
    
    -Per la neu, que pel camí hi ha (2)
    la calor ja la fondrà (2)
    -Oh, i la que fa!
    
    -Apa, aixeca't, encén el foc (2)
    i no anem massa a poc a poc (2)
    -Massa que em moc!
    
    -Tu les teies portaràs (2)
    i el camí il·luminaràs (2)
    -No ho faré pas!
    
    -Que no saps que aquesta nit (2)
    ha nascut Déu infinit (2)
    -Qui t'ho ha dit?
    
    Doncs un angel que, volant, (2)
    ens ho anava anunciant (2)
    No serà tant
    
    La samarra portaràs (2)
    i de neules l'ompliràs (2)
    Jo no vull pas
    
    Mai no acabes les raons! (2)
    Doncs, me l'omples torrons. (2)
    No són pas bons
    
    En miquel, el teu cosí (2)
    portarà un porró de vi. (2)
    N'hi haurà per mi?
    
    Cantaràs una cançó (2)
    davant Déu fet infantó. (2)
    Tot sol? no, no
    
    Quins vailets, més espantats! (2)
    Cantarem tots dos plegats (2)
    L'orgue dels gats!
    
    Doncs avant i no badem, (2)
    que ja és hora que marxem. (2)
    Cap a Betlem`,
    isSong: true,
    url:"oZIY7eSLYIM",
    etiquetes: ["Nadales","Tradicionals"],
  },
  {
    id: 153,
    title: "Bona nit",
    descripció:
    `Cançó Bona nit de "Els Pets"`,
    edatmin: 4,
    edatmax: 18,
    lletra:`Vine aquí  sé que estàs cansada,
    els ulls se’t fan petits, deixa'm abraçar-te
    tendrament i calla
    que és molt tard i arriba l'hora de dormir.
    
    Posa el cap  a la meva falda
    i deix la meva mà espolsar els fantasmes
    que t'amoïnen i t'espanten,    
    tanca els ulls que jo et vigilo des d'aquí.
    
    Dorm tranquil·la i digue'm bona nit,
    deix que et porti en braços fins al llit,
    jeu ben a la vora,
    saps que no estàs sola
    mentre et dic a cau d'orella bona nit.
    
    Pel balcó  la lluna t'esguarda
    i sé que et fa un petó, res no té importància
    fins demà a trenc d'alba
    quan de sobte t'acaroni la claror.

    Dorm tranquil·la i digue'm bona nit,
    deix que et porti en braços fins al llit,
    jeu ben a la vora,    
    saps que no estàs sola
    mentre et dic a cau d'orella bona nit.
    
    Molt bona nit.`,
    isSong: true,
    url:"p6f-gS7XYEA",
    etiquetes: ["Per anar a dormir","Pop rock català"],
  },
  {
    id: 154,
    title: "Bon dia",
    descripció:
    `Cançó Bon dia de "Els Pets"`,
    edatmin: 4,
    edatmax: 18,
    lletra:`La vella Montserrat
    desperta el barri a cops d'escombra tot cantant
    les primeres persianes
    s'obren feixugues badallant.
    
    Rere el vidre entelat 
    el cafeter assegura que no era penal
    i es desfà la conversa
    igual que el sucre del tallat.
    
    Bon dia, ningú ho ha demanat però 
    fa bon dia, damunt els caps un sol ben insolent
    il·lumina descarat tot l'espectacle de la gent.
    
    Al bell mig de la plaça    
    la peixatera pren paciència amb la Consol
    que remuga i regala
    grans bafarades d'alcohol.  
    
    I al pedrís reposant 
    l'avi Josep no es deixa perdre cap detall 
    i amb l'esguard es pregunta
    quants dies més té de regal. 
    
    Bon dia, ningú ho ha demanat però 
    fa bon dia, damunt els caps un sol ben insolent
    il·lumina descarat tot l'espectacle de la gent.
    
    Nens xisclant, olor a pixum de gat,
    veïnes que un cop has passat et critiquen.
    
    Gent llençant la brossa d'amagat
    i un retardat que amb ulls burletes et mira
    i diu: bon dia!
    
    Bon dia, ningú ho ha demanat però 
    fa bon dia, damunt els caps un sol ben insolent
    il·lumina descarat tot l'espectacle de la gent.`,
    isSong: true,
    url:"YnapaIyXSYE",
    etiquetes: ["Pop rock català"],
  },
  {
    id: 155,
    title: "Pol petit",
    descripció:
    `Cançó del Pol petit`,
    edatmin: 4,
    edatmax: 18,
    lletra:`Dies fets d'angoixa
    carrers plens de por
    gent sense esperança
    ciutats sense cor
    nens petits que creixen
    amb el cor glaçat
    son joguines
    que els grans hem trencat
    
    Ei Pol petit agafa la guitarra cada nit
    surt al carrer i canta una cançó
    canta ben fort i digues la veritat sense cap por
    Ei Pol petit també cantaré jo.

    Et diran que les guitarres
    et diran que les cançons
    son només per diverir-te
    i que no has de buscar raons

    Però no deixis que t'enganyin    
    qui diu això no et vol bé
    cal que surtis
    a cantar al carrer 
    
    Ei Pol petit ? Ei Pol petit ? Ei Pol petit també cantaré jo. Pol petit, Pol petit? Ei Pol petit també cantaré jo.`,
    isSong: true,
    url:"XPkwl3HXm3Y",
    etiquetes: ["Tradicionals"],
  },
  {
    id: 156,
    title: "50 tombarelles",
    descripció:
    `Cançó 50 tombarelles en el temps, composada per celebrar el 50è aniversari de la fundació Pere Tarrés.`,
    edatmin: 4,
    edatmax: 18,
    lletra:`Es van obrint els ulls        
    amb els brillants filets de llum      
    a les lliteres comença el neguit       
    l'ànim es desperta    
    amb el primer acudit    
    un cop de coixí et vol dir "bon dia amic"    
    
    
    Cinquanta tombarelles en el temps (3)     
    
    
    Com una capseta
    embolicada en un llençol
    perseguint petjades d'un tresor
    com aquella carta
    descoberta en mig del bosc
    formigues a la panxa i elefants al cor
    
    
    Esquitxos d'aventures
    i les forces per pujar
    grans muntanyes o petits turons
    l'olor de la ginesta
    barrejada amb la suor
    l'olor d'aquella tenda i de la pluja...
    
    
    50 tombarelles en el temps...        
    ...temps i esplai     
    trobar-nos en un molinet de vent,
    junts hem girat
    junts hem crescut
    junts donarem
    voltetes en el temps
    
    
    Empaitant històries
    amagades pels racons
    desenpolsegant velles cançons
    misteris i encanteris
    fan la guitza al campament
    -algú ha tancat la porta del castell-
    
    
    Hem plorat de riure
    hem plorat per un amor
    hem plorat topant amb un record
    com aquell juliol
    darrer aroma de la flor
    i sempre amb un setembre de llavors
    
    
    50 tombarelles en el temps...`,
    isSong: true,
    url:"liDToXBVYpo",
    etiquetes: ["Tradicionals"],
  },
  {
    id: 157,
    title: "Himne de la mare de Déu de l'alegria",
    descripció:
    `Cançó de la Mare de Déu de l'Alegria`,
    edatmin: 4,
    edatmax: 18,
    lletra:`"Déu te guard, plena de gràcia,      
    el Senyor és amb tu",    
    et digué l'àngel de Déu,    
    qui s'ho pot imaginar?    
    I et demana ser la Mare    
    de l'esperança del món.
    Sense dubtes, ni perquès,     
    tu dius que sí...   
    
    Per això ets la Mestra de l'Amor,     
    de tu aprenem a dir que "sí"
    al Senyor,    
    malgrat les nostres pors.
    
    
    I ara et cantem:      
    la nostra Mare ets, Santa Maria.    
    Et demanem     
    que sempre sigui Crist    
    nostra alegria,    
    que present en el nostre treball,    
    per educar en l'esplai,     
    forgem, homes i dones lliures.
    
    
    Et cantem:     
    la nostre Mare ets, Santa Maria,     
    et demanem,     
    que sempre sigui Crist     
    nostra alegria,    
    que aprenguem la confiança d'infant,
    la resposta a l'amor,     
    com tu, humil i sense por    
    humil i sense por.
    
    Del més gran al més petit,
    del nostre centre d'Esplai,
    et demanem Mare Nostra,
    que ens agafis de la mà.Que pregueu per tots nosaltres,
    ara i en la nostra mort,
    en la vida i en el joc,
    en tot moment.
    Per això ets la mestra de l'Esplai,
    de tu aprenem a treballar amb sentit
    pel Regne del teu Fill.`,
    isSong: true,
    url:"r7BpKmRX_6Q",
    etiquetes: ["Tradicionals"],
  },
  {
    id: 158,
    title: "Aguanta la vela",
    descripció:
    `Cançó "Aguanta la vela"`,
    edatmin: 4,
    edatmax: 18,
    lletra:`Aguanta la vela, hu, ha! Fantasma aguanta la vela, hu, ha!
      Aguanta la veeeeela, hu, ha! Fantasma aguanta la veeeeeela, hu, ha!`,
    isSong: true,
    url:"",
    etiquetes: ["Animació infantil", "12885 🌎"],
  },
  {
    id: 159,
    title: "Banana 🍌",
    descripció:
    `One banana, two banana, three banana, four banana...`,
    edatmin: 4,
    edatmax: 18,
    lletra:`S'ha de fer un canon dividint en grups i que cada grup fagi un tipus de ritme o variant de la lletra:
    One banana, two banana, three banana, four banana...
    `,
    isSong: true,
    url:"",
    etiquetes: ["Animació infantil", "12885 🌎"],
  },
  {
    id: 160,
    title: "La chivirita",
    descripció:
    `Cançó de la chivirita`,
    edatmin: 4,
    edatmax: 18,
    lletra:`-Machumbà la chivirita, pimienta, pitonga, pitanga i pita (x2, augmentant velocitat)
     -Que lo repita l@ "nom" (x2), si no s'ha aprés la lletra: -No se aprendió la letra (x4),
     si s'ha aprés la lletra: -Si se aprendió la letra (x4).
`, 
    isSong: true,
    url:"",
    etiquetes: ["Animació infantil", "12885 🌎"],
  },
  {
    id: 161,
    title: "Chipi-chipi",
    descripció:
    `Cançó del Chipi-chipi`,
    edatmin: 4,
    edatmax: 18,
    lletra:`-Ayer fui al pueblo, a ver a la Mari,
    -La Mari me enseñó a bailar el Chipi-chipi,
    -Baila el Chipi-chipi (x2)
    -Baila el Chipi-chipi, pero bàilalo bien.`, 
    isSong: true,
    url:"",
    etiquetes: ["Animació infantil", "12885 🌎"],
  },
  {
    id: 162,
    title: "Com esteu",
    descripció:
    `Cançó del "Com esteu ?"`,
    edatmin: 4,
    edatmax: 18,
    lletra:`-Hola nois, que tal i com esteu ? (Monitor)
    -Molt bé! (Nens)
    -I les vostres amistats com van ? (Monitor)
    -Molt bé! (Nens)
    -Farem el posible per ser bons amics (Monitor)
    -Hola nois, que tal i com esteu ? (Monitor)
    -Molt bé! (Nens)`, 
    isSong: true,
    url:"",
    etiquetes: ["Animació infantil", "12885 🌎"],
  },
  {
    id: 163,
    title: "Como lo llevas tronco",
    descripció:
    `Como lo llevas tronco ?`,
    edatmin: 4,
    edatmax: 18,
    lletra:`-Como lo llevas tronco ?
    -Yo muy bien, yo muy bien
    -Como lo llevas tronco ?
    -Yo muy bien, yo muy bien.`, 
    desenvolupament:(<div className="bloc w-full ">
      <img src="/Tronco1.jpeg"/>
      <img src="/Tronco2.jpeg"/>
    </div>),
    isSong: true,
    url:"",
    etiquetes: ["Animació infantil", "12885 🌎"],
  },
  {
    id: 164,
    title: "Hola, hola digues hola",
    descripció:
    `Cançó del "hola, hola digues hola`,
    edatmin: 4,
    edatmax: 18,
    lletra:`Hola, hola digues hola
    -Hola, hola digues hola,
    -Hola, hola digues hola,
    -Digues hola fent un bon crit!     (x2)
    (A la segona repetició cambiem "crit" per "salt")`, 
    isSong: true,
    url:"",
    etiquetes: ["Animació infantil", "12885 🌎"],
  },
  {
    id: 165,
    title: "La danza del vampiro",
    descripció:
    `Cançó de "La danza del vampiro"`,
    edatmin: 4,
    edatmax: 18,
    lletra:`-Esto es, la danza del vampiro, hu, ha, hu, ha
    -I tu seràs, mi víctima mortal.`, 
    isSong: true,
    url:"",
    etiquetes: ["Animació infantil", "12885 🌎"],
  },
  {
    id: 166,
    title: "Un limón i medio milón 🍋",
    descripció:
    `Joc interesant a partir de ritmes`,
    edatmin: 4,
    edatmax: 18,
    lletra:`A tothom se li asignarà un número, i haurán de fer la següent lletra sense perdre el ritme amb les mans:
    -(El teu número) limones i medio limón, (número de una altra persona) limones i medio limón (fins que tothom quedi eliminat.)
    No es poden dir número adjacents. Qui es trabi o falli queda eliminat.` , 
    isSong: true,
    url:"",
    etiquetes: ["Animació infantil", "12885 🌎"],
  },
  {
    id: 167,
    title: "La margarideta",
    descripció:
    `Cançó de "La margarideta"`,
    edatmin: 4,
    edatmax: 18,
    lletra:`-Qué li tocarem a la margarideta ?
    -Qué li tocarem a la margaridó ?
    -Li tocarem el "part del cos" a la margarideta
    -Li tocarem el "part del cos" a la margaridó.`,
    isSong: true,
    url:"",
    etiquetes: ["Animació infantil", "12885 🌎"],
  },
  {
    id: 168,
    title: "Pujem al tren",
    descripció:
    `Cançó de "Pujem al tren"`,
    edatmin: 4,
    edatmax: 18,
    lletra:`-Puuujem al tren, chuchua, chuchua 
    - Que ens n'anirem, chuchua, chuchua 
    -A veure el món, chuchua, chuchua 
    -Qui sap a on, chuchua, chuchua (Repetim incrementant la velocitat)`,
    isSong: true,
    url:"",
    etiquetes: ["Animació infantil", "12885 🌎"],
  },
  {
    id: 169,
    title: "Renta't les mans",
    descripció:
    `Cançó per ajudar a que els nens es rentin les mans`,
    edatmin: 4,
    edatmax: 18,
    lletra:`-Renta't les mans
    -Renta-les bé
    -Amunt, avall i les ungles també. (x2)`,
    isSong: true,
    url:"",
    etiquetes: ["Animació infantil", "12885 🌎"],
  },
  {
    id: 170,
    title: "Somos las nadadoras 🏊‍♀️",
    descripció:
    `Cançó de "Somos las nadadoras"`,
    edatmin: 4,
    edatmax: 18,
    lletra:`-Somos las nadadoras, que venimos de ultramar
    -I el agua està fresquibiris, fresquibiris, fresquibiris
    -I el agua està fresquibiris, fresquibiris, for you!`,
    isSong: true,
    url:"",
    etiquetes: ["Animació infantil", "12885 🌎"],
  },
  {
    id: 171,
    title: "Tren de l'alegria",
    descripció:
    `Cançó de "Somos las nadadoras"`,
    edatmin: 4,
    edatmax: 18,
    lletra:`-Aquest es el tren de l'alegria, aquest es el tren de l'ilusió
    -I ara fa triqui, i ara fa traca, i ara fa triqui triqui triqui triqui traca
    -I ara fa traca, i ara fa triqui, i ara fa traca traca traca traca triqui`,
    isSong: true,
    url:"",
    etiquetes: ["Animació infantil", "12885 🌎"],
  },
  {
    id: 172,
    title: "La polca d'ors",
    descripció:
    `Dansa de la polca d'ors`,
    edatmin: 4,
    edatmax: 18,
    desenvolupament:"La polca d’Ours és una de les moltes cançons tradicionals dels Pirineus, en els seus orígens era una dansa dedicada a l’ós, (Ours en francès significa ós) i encara que s’anomeni polca, es balla com una xampanya.  És un ball col·lectiu i es sol ballar en fila, però també es pot ballar en cercle i d’aquesta manera permet fer un canvi de parella cada vegada que es repeteix la música . La cançó s’ha estès tant, que és difícil trobar un grup de grallers que no la tingui al seu repertori.  La podreu sentir en passa carrers, balls de gegants i inclús en grups de castellers.",
    isSong: true,
    url:"pfCY41Urkyk",
    etiquetes: ["Danses", "12885 🌎"],
  },

];

export default activities;
