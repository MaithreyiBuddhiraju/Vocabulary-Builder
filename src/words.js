// Curated GRE-level + arcane vocabulary. Each entry: word, pronunciation,
// part of speech, tier (GRE | Arcane), meaning, etymology, usage, synonyms, antonyms.
export const WORDS = [
  {
    word: "Perfidious", pron: "/pər-ˈfi-dē-əs/", pos: "adjective", tier: "GRE",
    meaning: "Deceitful and untrustworthy; deliberately faithless to a trust or vow.",
    etymology: "From Latin perfidia ‘faithlessness,’ from per- ‘to ill effect’ + fides ‘faith.’ The same fides gives us fidelity and confide.",
    usage: "The perfidious advisor smiled at the king each morning while selling his secrets each night.",
    syn: ["treacherous", "duplicitous", "faithless"], ant: ["loyal", "trustworthy", "faithful"]
  },
  {
    word: "Sycophant", pron: "/ˈsi-kə-fənt/", pos: "noun", tier: "GRE",
    meaning: "A person who flatters powerful people for personal gain; a servile self-seeker.",
    etymology: "From Greek sykophantēs, literally ‘fig-shower’ — possibly an informer who denounced illegal fig exports. The sense narrowed from ‘informer’ to ‘flatterer.’",
    usage: "Surrounded by sycophants, the executive never heard a single honest objection.",
    syn: ["toady", "bootlicker", "flatterer"], ant: ["critic", "detractor"]
  },
  {
    word: "Pleonasm", pron: "/ˈplē-ə-ˌna-zəm/", pos: "noun", tier: "Arcane",
    meaning: "The use of more words than necessary to convey meaning, as in ‘a free gift.’",
    etymology: "From Greek pleonasmos ‘excess,’ from pleon ‘more.’ A cousin of the prefix pleo- meaning abundance.",
    usage: "‘Burning fire’ and ‘unexpected surprise’ are pleonasms beloved by careless writers.",
    syn: ["redundancy", "tautology", "verbosity"], ant: ["concision", "brevity"]
  },
  {
    word: "Defenestrate", pron: "/dē-ˈfe-nə-ˌstrāt/", pos: "verb", tier: "Arcane",
    meaning: "To throw someone or something out of a window.",
    etymology: "From Latin de- ‘out of’ + fenestra ‘window.’ Coined after the 1618 Defenestration of Prague, which helped spark the Thirty Years' War.",
    usage: "Frustrated with the frozen laptop, he was sorely tempted to defenestrate it.",
    syn: ["eject", "expel"], ant: ["admit", "install"]
  },
  {
    word: "Obsequious", pron: "/əb-ˈsē-kwē-əs/", pos: "adjective", tier: "GRE",
    meaning: "Obedient or attentive to an excessive or fawning degree.",
    etymology: "From Latin obsequiosus ‘compliant,’ from obsequi ‘to follow, comply with.’",
    usage: "The obsequious waiter refilled the half-full glass for the tenth time.",
    syn: ["servile", "fawning", "unctuous"], ant: ["domineering", "assertive"]
  },
  {
    word: "Ephemeral", pron: "/ə-ˈfe-mə-rəl/", pos: "adjective", tier: "GRE",
    meaning: "Lasting for a very short time; fleeting.",
    etymology: "From Greek ephēmeros ‘lasting only a day,’ from epi ‘on’ + hēmera ‘day.’ Originally described mayflies, which live but a day.",
    usage: "Fame on the internet is ephemeral, evaporating before the screenshot finishes saving.",
    syn: ["transient", "fleeting", "evanescent"], ant: ["enduring", "permanent", "perpetual"]
  },
  {
    word: "Truculent", pron: "/ˈtrə-kyə-lənt/", pos: "adjective", tier: "GRE",
    meaning: "Eager or quick to argue or fight; aggressively defiant.",
    etymology: "From Latin truculentus ‘fierce,’ from trux ‘savage, grim.’",
    usage: "The truculent customer demanded a refund before the clerk could say good morning.",
    syn: ["belligerent", "pugnacious", "combative"], ant: ["amiable", "placid", "docile"]
  },
  {
    word: "Mellifluous", pron: "/me-ˈli-flü-əs/", pos: "adjective", tier: "GRE",
    meaning: "Sweet or musical; pleasant to hear, as a flowing voice.",
    etymology: "From Latin mel ‘honey’ + fluere ‘to flow.’ Literally ‘flowing with honey.’",
    usage: "Her mellifluous narration could make a tax code sound like a lullaby.",
    syn: ["dulcet", "honeyed", "euphonious"], ant: ["grating", "cacophonous", "harsh"]
  },
  {
    word: "Sanguine", pron: "/ˈsaŋ-gwən/", pos: "adjective", tier: "GRE",
    meaning: "Optimistic or positive, especially in an apparently bad situation.",
    etymology: "From Latin sanguis ‘blood.’ Medieval medicine held that a blood-dominant humor produced a cheerful temperament.",
    usage: "Despite the storm warnings, the captain remained sanguine about the crossing.",
    syn: ["optimistic", "buoyant", "hopeful"], ant: ["pessimistic", "gloomy", "morose"]
  },
  {
    word: "Pernicious", pron: "/pər-ˈni-shəs/", pos: "adjective", tier: "GRE",
    meaning: "Having a harmful effect, especially in a gradual or subtle way.",
    etymology: "From Latin perniciosus ‘destructive,’ from per- ‘thoroughly’ + nex ‘death.’",
    usage: "The pernicious rumor spread quietly until it had poisoned every friendship in the office.",
    syn: ["insidious", "deleterious", "noxious"], ant: ["benign", "harmless", "salutary"]
  },
  {
    word: "Laconic", pron: "/lə-ˈkä-nik/", pos: "adjective", tier: "GRE",
    meaning: "Using very few words; terse to the point of seeming rude or mysterious.",
    etymology: "From Greek Lakōnikos ‘of Laconia’ (Sparta), whose people were famed for blunt, economical speech.",
    usage: "Asked for his life story, the laconic rancher replied, ‘Born. Worked. Still here.’",
    syn: ["terse", "succinct", "curt"], ant: ["verbose", "loquacious", "garrulous"]
  },
  {
    word: "Obfuscate", pron: "/ˈäb-fə-ˌskāt/", pos: "verb", tier: "GRE",
    meaning: "To deliberately make something unclear or difficult to understand.",
    etymology: "From Latin obfuscare ‘to darken,’ from ob- ‘over’ + fuscare ‘to make dark.’",
    usage: "The contract's fine print seemed designed to obfuscate rather than to inform.",
    syn: ["obscure", "muddle", "befog"], ant: ["clarify", "illuminate", "elucidate"]
  },
  {
    word: "Recalcitrant", pron: "/ri-ˈkal-sə-trənt/", pos: "adjective", tier: "GRE",
    meaning: "Stubbornly resistant to authority, control, or guidance.",
    etymology: "From Latin recalcitrare ‘to kick back,’ from re- ‘back’ + calx ‘heel’ — literally a mule digging in its heels.",
    usage: "The recalcitrant printer refused to acknowledge a single command all afternoon.",
    syn: ["obstinate", "intractable", "refractory"], ant: ["compliant", "docile", "tractable"]
  },
  {
    word: "Insidious", pron: "/in-ˈsi-dē-əs/", pos: "adjective", tier: "GRE",
    meaning: "Proceeding in a gradual, subtle way but with harmful effects.",
    etymology: "From Latin insidiosus ‘cunning,’ from insidiae ‘ambush,’ from insidere ‘to sit in wait.’",
    usage: "Boredom is an insidious thief, stealing whole years before you notice they're gone.",
    syn: ["stealthy", "subtle", "treacherous"], ant: ["overt", "forthright", "obvious"]
  },
  {
    word: "Ineffable", pron: "/i-ˈne-fə-bəl/", pos: "adjective", tier: "GRE",
    meaning: "Too great or extreme to be expressed or described in words.",
    etymology: "From Latin ineffabilis, from in- ‘not’ + effabilis ‘able to be uttered,’ from fari ‘to speak.’",
    usage: "Standing at the canyon's edge, she felt an ineffable mix of awe and vertigo.",
    syn: ["indescribable", "inexpressible", "unutterable"], ant: ["describable", "expressible"]
  },
  {
    word: "Perspicacious", pron: "/ˌpər-spə-ˈkā-shəs/", pos: "adjective", tier: "GRE",
    meaning: "Having a ready insight into and understanding of things; keenly perceptive.",
    etymology: "From Latin perspicax ‘sharp-sighted,’ from perspicere ‘to see through.’",
    usage: "A perspicacious editor spots the weak paragraph before the writer admits it exists.",
    syn: ["astute", "discerning", "shrewd"], ant: ["obtuse", "dull", "undiscerning"]
  },
  {
    word: "Quotidian", pron: "/kwō-ˈti-dē-ən/", pos: "adjective", tier: "Arcane",
    meaning: "Of or occurring every day; ordinary or everyday, often dully so.",
    etymology: "From Latin quotidianus ‘daily,’ from quotidie ‘every day,’ from quot ‘how many’ + dies ‘day.’",
    usage: "He found unexpected poetry in the quotidian rituals of coffee and the morning paper.",
    syn: ["everyday", "mundane", "commonplace"], ant: ["extraordinary", "exceptional"]
  },
  {
    word: "Cantankerous", pron: "/kan-ˈtaŋ-kə-rəs/", pos: "adjective", tier: "GRE",
    meaning: "Bad-tempered, argumentative, and uncooperative.",
    etymology: "Of uncertain 18th-century origin, perhaps from Middle English contek ‘strife,’ influenced by rancorous.",
    usage: "The cantankerous old editor rejected semicolons and small talk with equal disdain.",
    syn: ["irascible", "querulous", "crotchety"], ant: ["genial", "agreeable", "good-natured"]
  },
  {
    word: "Lugubrious", pron: "/lu̇-ˈgü-brē-əs/", pos: "adjective", tier: "Arcane",
    meaning: "Looking or sounding sad and dismal, often exaggeratedly so.",
    etymology: "From Latin lugubris ‘mournful,’ from lugere ‘to mourn.’",
    usage: "The hound greeted every guest with the same lugubrious, world-weary stare.",
    syn: ["mournful", "doleful", "funereal"], ant: ["cheerful", "jovial", "blithe"]
  },
  {
    word: "Sesquipedalian", pron: "/ˌses-kwə-pə-ˈdā-lē-ən/", pos: "adjective", tier: "Arcane",
    meaning: "(Of a word) very long; (of a writer) given to using long words.",
    etymology: "From Latin sesquipedalis ‘a foot and a half long,’ coined by the poet Horace to mock overlong words.",
    usage: "His sesquipedalian emails required a dictionary and a strong cup of coffee.",
    syn: ["polysyllabic", "long-winded", "grandiloquent"], ant: ["terse", "monosyllabic"]
  },
  {
    word: "Inchoate", pron: "/in-ˈkō-ət/", pos: "adjective", tier: "GRE",
    meaning: "Just begun and so not fully formed or developed; rudimentary.",
    etymology: "From Latin inchoatus ‘begun,’ from incohare ‘to begin,’ literally ‘to hitch up’ a plow team.",
    usage: "The plan was still inchoate — a few sketches and a great deal of enthusiasm.",
    syn: ["nascent", "embryonic", "rudimentary"], ant: ["mature", "developed", "complete"]
  },
  {
    word: "Vituperative", pron: "/vī-ˈtü-pə-rə-tiv/", pos: "adjective", tier: "Arcane",
    meaning: "Bitter and abusive; full of harsh criticism.",
    etymology: "From Latin vituperare ‘to blame,’ from vitium ‘fault’ + parare ‘to make ready.’",
    usage: "The review was so vituperative that the author framed it as a badge of honor.",
    syn: ["scathing", "venomous", "caustic"], ant: ["complimentary", "laudatory", "flattering"]
  },
  {
    word: "Equivocate", pron: "/i-ˈkwi-və-ˌkāt/", pos: "verb", tier: "GRE",
    meaning: "To use ambiguous language so as to conceal the truth or avoid commitment.",
    etymology: "From Latin aequivocare, from aequus ‘equal’ + vocare ‘to call’ — to call two things by one name.",
    usage: "Pressed for a yes or no, the senator equivocated for a full ten minutes.",
    syn: ["prevaricate", "hedge", "waffle"], ant: ["specify", "commit", "affirm"]
  },
  {
    word: "Fastidious", pron: "/fa-ˈsti-dē-əs/", pos: "adjective", tier: "GRE",
    meaning: "Very attentive to and concerned about accuracy and detail; hard to please.",
    etymology: "From Latin fastidiosus ‘disdainful,’ from fastidium ‘loathing.’",
    usage: "A fastidious typographer will lose sleep over a single misaligned comma.",
    syn: ["meticulous", "punctilious", "scrupulous"], ant: ["careless", "slovenly", "lax"]
  },
  {
    word: "Munificent", pron: "/myu̇-ˈni-fə-sənt/", pos: "adjective", tier: "GRE",
    meaning: "Larger or more generous than is usual or necessary.",
    etymology: "From Latin munificus ‘generous,’ from munus ‘gift’ + facere ‘to make.’",
    usage: "A munificent stranger paid for every coffee in line that frozen morning.",
    syn: ["bountiful", "magnanimous", "lavish"], ant: ["stingy", "miserly", "parsimonious"]
  },
  {
    word: "Pulchritude", pron: "/ˈpəl-krə-ˌtüd/", pos: "noun", tier: "Arcane",
    meaning: "Physical beauty.",
    etymology: "From Latin pulchritudo ‘beauty,’ from pulcher ‘beautiful.’ Famous for sounding nothing like what it means.",
    usage: "The garden's pulchritude was undeniable, even if the word for it was ungainly.",
    syn: ["beauty", "comeliness", "loveliness"], ant: ["ugliness", "homeliness"]
  },
  {
    word: "Taciturn", pron: "/ˈta-sə-ˌtərn/", pos: "adjective", tier: "GRE",
    meaning: "Reserved or uncommunicative in speech; saying little.",
    etymology: "From Latin taciturnus ‘not talkative,’ from tacere ‘to be silent’ — the same root as tacit.",
    usage: "The taciturn lighthouse keeper answered most questions with a slow nod.",
    syn: ["reticent", "reserved", "tight-lipped"], ant: ["talkative", "garrulous", "voluble"]
  },
  {
    word: "Surreptitious", pron: "/ˌsər-əp-ˈti-shəs/", pos: "adjective", tier: "GRE",
    meaning: "Kept secret because it would not be approved of; done by stealth.",
    etymology: "From Latin surrepticius ‘stolen,’ from surripere ‘to seize secretly,’ from sub- ‘under’ + rapere ‘to seize.’",
    usage: "She took a surreptitious glance at her phone beneath the conference table.",
    syn: ["clandestine", "covert", "furtive"], ant: ["overt", "open", "conspicuous"]
  },
  {
    word: "Ebullient", pron: "/i-ˈbu̇l-yənt/", pos: "adjective", tier: "GRE",
    meaning: "Cheerful and full of energy; exuberant.",
    etymology: "From Latin ebullire ‘to boil up,’ from e- ‘out’ + bullire ‘to bubble.’",
    usage: "The team returned from the win ebullient, recounting every play twice.",
    syn: ["exuberant", "effervescent", "buoyant"], ant: ["subdued", "listless", "morose"]
  },
  {
    word: "Grandiloquent", pron: "/gran-ˈdi-lə-kwənt/", pos: "adjective", tier: "Arcane",
    meaning: "Pompous or extravagant in language, style, or manner.",
    etymology: "From Latin grandiloquus, from grandis ‘grand’ + loqui ‘to speak.’",
    usage: "His grandiloquent toast lasted longer than the dinner that prompted it.",
    syn: ["bombastic", "pompous", "magniloquent"], ant: ["plainspoken", "unpretentious"]
  },
  {
    word: "Calumny", pron: "/ˈka-ləm-nē/", pos: "noun", tier: "GRE",
    meaning: "The making of false and defamatory statements to damage someone's reputation.",
    etymology: "From Latin calumnia ‘slander, trickery,’ related to calvi ‘to deceive.’",
    usage: "He met the calumny with silence, trusting the truth to outlast the lie.",
    syn: ["slander", "defamation", "aspersion"], ant: ["praise", "commendation", "tribute"]
  },
  {
    word: "Apricity", pron: "/ə-ˈpri-sə-tē/", pos: "noun", tier: "Arcane",
    meaning: "The warmth of the sun in winter.",
    etymology: "From Latin apricus ‘exposed to the sun.’ A rare 17th-century English coinage, now largely forgotten.",
    usage: "They lingered on the bench for the apricity, eyes closed against the low gold light.",
    syn: ["warmth", "sunniness"], ant: ["chill", "frigidity"]
  },
  {
    word: "Abrogate", pron: "/ˈa-brə-ˌgāt/", pos: "verb", tier: "GRE",
    meaning: "To repeal or do away with a law, right, or formal agreement.",
    etymology: "From Latin abrogare ‘to repeal,’ from ab- ‘away’ + rogare ‘to ask, propose a law.’",
    usage: "The new regime moved swiftly to abrogate the treaty its predecessors had signed.",
    syn: ["repeal", "rescind", "annul"], ant: ["ratify", "uphold", "enact"]
  },
  {
    word: "Anathema", pron: "/ə-ˈna-thə-mə/", pos: "noun", tier: "GRE",
    meaning: "Something or someone that one vehemently dislikes; a formal curse or ban.",
    etymology: "From Greek anathema ‘a thing devoted (to evil), accursed,’ from anatithenai ‘to set up, dedicate.’",
    usage: "To the minimalist architect, ornamental molding was anathema.",
    syn: ["abomination", "bane", "curse"], ant: ["delight", "beloved", "blessing"]
  },
  {
    word: "Apocryphal", pron: "/ə-ˈpä-krə-fəl/", pos: "adjective", tier: "GRE",
    meaning: "Of doubtful authenticity, although widely circulated as being true.",
    etymology: "From Greek apokryphos ‘hidden,’ from apokryptein ‘to hide away’ — originally describing texts excluded from the biblical canon.",
    usage: "The story of the founder coding the whole app in one weekend is almost certainly apocryphal.",
    syn: ["dubious", "unverified", "fictitious"], ant: ["authentic", "verified", "genuine"]
  },
  {
    word: "Approbation", pron: "/ˌa-prə-ˈbā-shən/", pos: "noun", tier: "GRE",
    meaning: "Approval or praise, especially from an authority or the public.",
    etymology: "From Latin approbare ‘to approve,’ from ad- ‘to’ + probare ‘to test, find good.’",
    usage: "The young violinist glowed under the rare approbation of her stern teacher.",
    syn: ["approval", "acclaim", "commendation"], ant: ["disapproval", "censure", "condemnation"]
  },
  {
    word: "Assuage", pron: "/ə-ˈswāj/", pos: "verb", tier: "GRE",
    meaning: "To make an unpleasant feeling less intense; to soothe or relieve.",
    etymology: "From Old French assouagier, ultimately from Latin ad- ‘to’ + suavis ‘sweet’ — to sweeten away.",
    usage: "No amount of reassurance could assuage her worry until the plane finally landed.",
    syn: ["alleviate", "mollify", "soothe"], ant: ["aggravate", "intensify", "inflame"]
  },
  {
    word: "Avarice", pron: "/ˈa-və-rəs/", pos: "noun", tier: "GRE",
    meaning: "Extreme greed for wealth or material gain.",
    etymology: "From Latin avaritia ‘greed,’ from avarus ‘greedy,’ from avere ‘to crave.’",
    usage: "Avarice kept him counting coins long after he had more than he could ever spend.",
    syn: ["greed", "cupidity", "rapacity"], ant: ["generosity", "charity", "munificence"]
  },
  {
    word: "Banal", pron: "/bə-ˈnäl/", pos: "adjective", tier: "GRE",
    meaning: "So lacking in originality as to be obvious and boring; trite.",
    etymology: "From French banal, originally ‘communal, open to everyone’ (of a feudal mill or oven) — hence common, ordinary.",
    usage: "The film's banal dialogue made even its explosions feel tedious.",
    syn: ["trite", "hackneyed", "vapid"], ant: ["original", "fresh", "novel"]
  },
  {
    word: "Cacophony", pron: "/ka-ˈkä-fə-nē/", pos: "noun", tier: "GRE",
    meaning: "A harsh, discordant mixture of sounds.",
    etymology: "From Greek kakophōnia, from kakos ‘bad’ + phōnē ‘sound, voice.’",
    usage: "The orchestra's warm-up was a cacophony that dissolved, at the baton's tap, into silence.",
    syn: ["din", "discord", "racket"], ant: ["harmony", "euphony", "melody"]
  },
  {
    word: "Capricious", pron: "/kə-ˈpri-shəs/", pos: "adjective", tier: "GRE",
    meaning: "Given to sudden and unaccountable changes of mood or behavior.",
    etymology: "From Italian capriccio ‘sudden start, whim,’ perhaps from capo ‘head’ + riccio ‘hedgehog’ — hair standing on end.",
    usage: "Mountain weather is capricious: sunshine, hail, and fog within a single hour.",
    syn: ["fickle", "mercurial", "whimsical"], ant: ["steady", "constant", "predictable"]
  },
  {
    word: "Castigate", pron: "/ˈka-stə-ˌgāt/", pos: "verb", tier: "GRE",
    meaning: "To reprimand someone severely.",
    etymology: "From Latin castigare ‘to correct, chastise,’ from castus ‘pure’ + agere ‘to drive’ — to drive toward purity.",
    usage: "The coach castigated the team at halftime, and they played the second half like men possessed.",
    syn: ["berate", "rebuke", "excoriate"], ant: ["praise", "commend", "laud"]
  },
  {
    word: "Chicanery", pron: "/shi-ˈkā-nə-rē/", pos: "noun", tier: "GRE",
    meaning: "The use of trickery or deception to achieve a purpose, especially legal or political.",
    etymology: "From French chicaner ‘to quibble, pettifog,’ of uncertain origin.",
    usage: "The merger collapsed once the accountants uncovered years of bookkeeping chicanery.",
    syn: ["trickery", "subterfuge", "duplicity"], ant: ["honesty", "candor", "fair dealing"]
  },
  {
    word: "Cogent", pron: "/ˈkō-jənt/", pos: "adjective", tier: "GRE",
    meaning: "Clear, logical, and convincing; powerfully persuasive.",
    etymology: "From Latin cogere ‘to drive together, compel,’ from co- ‘together’ + agere ‘to drive.’",
    usage: "Her cogent argument turned three skeptics on the board in under five minutes.",
    syn: ["compelling", "persuasive", "forceful"], ant: ["unconvincing", "weak", "muddled"]
  },
  {
    word: "Craven", pron: "/ˈkrā-vən/", pos: "adjective", tier: "GRE",
    meaning: "Contemptibly lacking in courage; cowardly.",
    etymology: "From Middle English cravant ‘defeated,’ probably from Old French cravente ‘overcome,’ from Latin crepare ‘to crack, break.’",
    usage: "It was a craven move to blame the intern for a decision made in the boardroom.",
    syn: ["cowardly", "spineless", "pusillanimous"], ant: ["brave", "valiant", "dauntless"]
  },
  {
    word: "Credulous", pron: "/ˈkre-jə-ləs/", pos: "adjective", tier: "GRE",
    meaning: "Having or showing too great a readiness to believe things.",
    etymology: "From Latin credulus ‘trusting,’ from credere ‘to believe’ — the root of credit and creed.",
    usage: "Credulous investors handed the charlatan their savings on the strength of a slideshow.",
    syn: ["gullible", "naive", "trusting"], ant: ["skeptical", "wary", "incredulous"]
  },
  {
    word: "Demagogue", pron: "/ˈde-mə-ˌgäg/", pos: "noun", tier: "GRE",
    meaning: "A leader who gains power by appealing to popular desires and prejudices rather than reason.",
    etymology: "From Greek dēmagōgos ‘leader of the people,’ from dēmos ‘people’ + agōgos ‘leading.’ Once neutral; the sense soured early.",
    usage: "The demagogue offered the crowd villains instead of policies, and they roared their approval.",
    syn: ["rabble-rouser", "agitator", "firebrand"], ant: ["statesman", "unifier"]
  },
  {
    word: "Desultory", pron: "/ˈde-səl-ˌtȯr-ē/", pos: "adjective", tier: "GRE",
    meaning: "Lacking a plan, purpose, or enthusiasm; jumping from one thing to another.",
    etymology: "From Latin desultor ‘a circus rider who leaps from horse to horse,’ from desilire ‘to jump down.’",
    usage: "They made desultory conversation about the weather while waiting for the real news.",
    syn: ["aimless", "haphazard", "unfocused"], ant: ["methodical", "systematic", "purposeful"]
  },
  {
    word: "Diatribe", pron: "/ˈdī-ə-ˌtrīb/", pos: "noun", tier: "GRE",
    meaning: "A forceful and bitter verbal attack against someone or something.",
    etymology: "From Greek diatribē ‘a wearing away, a pastime, discourse,’ from dia- ‘through’ + tribein ‘to rub.’",
    usage: "What began as a product review swelled into a forty-minute diatribe against modern software.",
    syn: ["tirade", "harangue", "polemic"], ant: ["eulogy", "encomium", "panegyric"]
  },
  {
    word: "Diffident", pron: "/ˈdi-fə-dənt/", pos: "adjective", tier: "GRE",
    meaning: "Modest or shy because of a lack of self-confidence.",
    etymology: "From Latin diffidere ‘to mistrust,’ from dis- ‘away’ + fidere ‘to trust’ — mistrusting oneself.",
    usage: "The diffident new hire had the best idea in the room and almost didn't say it.",
    syn: ["timid", "self-effacing", "bashful"], ant: ["confident", "assertive", "bold"]
  },
  {
    word: "Egregious", pron: "/i-ˈgrē-jəs/", pos: "adjective", tier: "GRE",
    meaning: "Outstandingly bad; shocking and flagrant.",
    etymology: "From Latin egregius ‘distinguished, standing out from the flock,’ from e- ‘out’ + grex ‘flock.’ It once meant remarkably good; irony flipped it.",
    usage: "Misspelling the client's name on the cover page was an egregious way to open the pitch.",
    syn: ["flagrant", "glaring", "outrageous"], ant: ["minor", "trifling", "venial"]
  },
  {
    word: "Enervate", pron: "/ˈe-nər-ˌvāt/", pos: "verb", tier: "GRE",
    meaning: "To drain of energy or vitality; to weaken.",
    etymology: "From Latin enervare ‘to remove the sinews,’ from e- ‘out’ + nervus ‘sinew, nerve.’ Often mistaken for its near-opposite, energize.",
    usage: "The August humidity enervated the hikers before they reached the first ridge.",
    syn: ["exhaust", "sap", "debilitate"], ant: ["invigorate", "energize", "fortify"]
  },
  {
    word: "Equanimity", pron: "/ˌē-kwə-ˈni-mə-tē/", pos: "noun", tier: "GRE",
    meaning: "Mental calmness and composure, especially in a difficult situation.",
    etymology: "From Latin aequanimitas, from aequus ‘even’ + animus ‘mind, spirit.’",
    usage: "She absorbed the bad news with an equanimity that steadied the whole room.",
    syn: ["composure", "serenity", "aplomb"], ant: ["agitation", "anxiety", "perturbation"]
  },
  {
    word: "Erudite", pron: "/ˈer-ə-ˌdīt/", pos: "adjective", tier: "GRE",
    meaning: "Having or showing great knowledge gained from study and reading.",
    etymology: "From Latin eruditus ‘instructed,’ from e- ‘out of’ + rudis ‘rude, untrained’ — literally brought out of rawness.",
    usage: "Her erudite footnotes were often more entertaining than the chapters above them.",
    syn: ["learned", "scholarly", "lettered"], ant: ["ignorant", "unlettered", "uneducated"]
  },
  {
    word: "Esoteric", pron: "/ˌe-sə-ˈter-ik/", pos: "adjective", tier: "GRE",
    meaning: "Intended for or understood by only a small group with specialized knowledge.",
    etymology: "From Greek esōterikos ‘inner,’ from esō ‘within’ — teachings reserved for an inner circle of disciples.",
    usage: "The talk drifted into esoteric type theory, and half the audience drifted to their phones.",
    syn: ["arcane", "abstruse", "recondite"], ant: ["accessible", "mainstream", "exoteric"]
  },
  {
    word: "Exculpate", pron: "/ˈek-skəl-ˌpāt/", pos: "verb", tier: "GRE",
    meaning: "To clear from blame or alleged fault.",
    etymology: "From Latin ex- ‘out of’ + culpa ‘blame, fault’ — the culpa of culprit and culpable.",
    usage: "The security footage fully exculpated the night watchman.",
    syn: ["exonerate", "absolve", "vindicate"], ant: ["incriminate", "convict", "blame"]
  },
  {
    word: "Fatuous", pron: "/ˈfa-chü-əs/", pos: "adjective", tier: "GRE",
    meaning: "Silly and pointless, especially in a smug or complacent way.",
    etymology: "From Latin fatuus ‘foolish.’ Related to infatuate — to be made foolish.",
    usage: "The panel's fatuous advice — ‘just go viral’ — drew polite laughter and private despair.",
    syn: ["inane", "vacuous", "asinine"], ant: ["sensible", "intelligent", "astute"]
  },
  {
    word: "Fecund", pron: "/ˈfe-kənd/", pos: "adjective", tier: "GRE",
    meaning: "Highly fertile; producing or capable of producing abundant offspring or ideas.",
    etymology: "From Latin fecundus ‘fruitful,’ related to felix ‘happy, fortunate.’",
    usage: "Her fecund imagination produced three novel plots before breakfast.",
    syn: ["fertile", "prolific", "fruitful"], ant: ["barren", "sterile", "unproductive"]
  },
  {
    word: "Hackneyed", pron: "/ˈhak-nēd/", pos: "adjective", tier: "GRE",
    meaning: "Made trite and unoriginal through overuse.",
    etymology: "From Hackney, a London borough once known for hired horses — a ‘hackney’ was worn out by constant use.",
    usage: "The speech leaned on hackneyed phrases until ‘thinking outside the box’ felt like a threat.",
    syn: ["trite", "clichéd", "stale"], ant: ["fresh", "original", "inventive"]
  },
  {
    word: "Hegemony", pron: "/hi-ˈje-mə-nē/", pos: "noun", tier: "GRE",
    meaning: "Dominance or leadership of one group, state, or idea over others.",
    etymology: "From Greek hēgemonia ‘leadership,’ from hēgemōn ‘leader,’ from hēgeisthai ‘to lead.’",
    usage: "The startup's scrappy app quietly ended the incumbent's decade-long hegemony.",
    syn: ["dominance", "supremacy", "ascendancy"], ant: ["subordination", "subjection"]
  },
  {
    word: "Iconoclast", pron: "/ī-ˈkä-nə-ˌklast/", pos: "noun", tier: "GRE",
    meaning: "A person who attacks cherished beliefs or established institutions.",
    etymology: "From Greek eikōn ‘image’ + klastēs ‘breaker’ — originally one who destroyed religious icons in 8th-century Byzantium.",
    usage: "An iconoclast in a field of traditionalists, she questioned every ‘best practice’ on the list.",
    syn: ["heretic", "maverick", "dissident"], ant: ["conformist", "traditionalist"]
  },
  {
    word: "Intransigent", pron: "/in-ˈtran-sə-jənt/", pos: "adjective", tier: "GRE",
    meaning: "Unwilling to change one's views or to compromise.",
    etymology: "From Spanish los intransigentes, a radical 19th-century party that refused all compromise; from Latin in- ‘not’ + transigere ‘to come to an agreement.’",
    usage: "Negotiations stalled for weeks, both sides equally intransigent on the final clause.",
    syn: ["uncompromising", "inflexible", "obdurate"], ant: ["flexible", "accommodating", "amenable"]
  },
  {
    word: "Invective", pron: "/in-ˈvek-tiv/", pos: "noun", tier: "GRE",
    meaning: "Insulting, abusive, or highly critical language.",
    etymology: "From Latin invectivus ‘abusive,’ from invehi ‘to attack with words,’ literally ‘to ride against.’",
    usage: "The referee absorbed a stream of invective from both benches without blinking.",
    syn: ["vitriol", "abuse", "obloquy"], ant: ["praise", "flattery", "compliment"]
  },
  {
    word: "Loquacious", pron: "/lō-ˈkwā-shəs/", pos: "adjective", tier: "GRE",
    meaning: "Tending to talk a great deal; talkative.",
    etymology: "From Latin loquax ‘talkative,’ from loqui ‘to speak’ — the root of eloquent and colloquial.",
    usage: "Our loquacious cab driver covered politics, opera, and his knee surgery before the first light.",
    syn: ["garrulous", "voluble", "chatty"], ant: ["taciturn", "reticent", "laconic"]
  },
  {
    word: "Maudlin", pron: "/ˈmȯd-lən/", pos: "adjective", tier: "GRE",
    meaning: "Self-pityingly or tearfully sentimental, often through drink.",
    etymology: "From Mary Magdalene, conventionally painted weeping — ‘Maudlin’ was the English pronunciation of her name.",
    usage: "By the third toast, the speeches had turned maudlin and the tissues were circulating.",
    syn: ["mawkish", "sentimental", "weepy"], ant: ["unsentimental", "stoic", "dry-eyed"]
  },
  {
    word: "Mendacious", pron: "/men-ˈdā-shəs/", pos: "adjective", tier: "GRE",
    meaning: "Not telling the truth; habitually lying.",
    etymology: "From Latin mendax ‘lying,’ related to mendum ‘fault, defect.’",
    usage: "The witness's mendacious account unraveled under the first ten seconds of cross-examination.",
    syn: ["dishonest", "deceitful", "untruthful"], ant: ["truthful", "honest", "veracious"]
  },
  {
    word: "Mercurial", pron: "/mər-ˈkyu̇r-ē-əl/", pos: "adjective", tier: "GRE",
    meaning: "Subject to sudden, unpredictable changes of mood or mind.",
    etymology: "From Latin mercurialis ‘of the god Mercury’ — swift, eloquent, volatile, like the quicksilver named for him.",
    usage: "Working for a mercurial chef meant reading the kitchen's weather before saying good morning.",
    syn: ["volatile", "capricious", "erratic"], ant: ["stable", "constant", "even-keeled"]
  },
  {
    word: "Misanthrope", pron: "/ˈmi-sən-ˌthrōp/", pos: "noun", tier: "GRE",
    meaning: "A person who dislikes and distrusts humankind.",
    etymology: "From Greek misanthrōpos, from misein ‘to hate’ + anthrōpos ‘human being.’",
    usage: "The misanthrope kept a beautiful garden, preferring the company of roses to that of neighbors.",
    syn: ["cynic", "recluse", "hermit"], ant: ["philanthropist", "humanitarian"]
  },
  {
    word: "Mollify", pron: "/ˈmä-lə-ˌfī/", pos: "verb", tier: "GRE",
    meaning: "To calm or soothe someone who is angry or anxious.",
    etymology: "From Latin mollificare ‘to soften,’ from mollis ‘soft’ + facere ‘to make.’",
    usage: "A refund and a handwritten apology finally mollified the furious customer.",
    syn: ["appease", "placate", "pacify"], ant: ["provoke", "enrage", "inflame"]
  },
  {
    word: "Nadir", pron: "/ˈnā-ˌdir/", pos: "noun", tier: "GRE",
    meaning: "The lowest point in the fortunes of a person or organization.",
    etymology: "From Arabic naẓīr ‘opposite’ — in astronomy, the point of the sky directly underfoot, opposite the zenith.",
    usage: "Losing the account, the office, and the espresso machine in one week marked the firm's nadir.",
    syn: ["low point", "rock bottom", "depths"], ant: ["zenith", "peak", "apex"]
  },
  {
    word: "Obdurate", pron: "/ˈäb-də-rət/", pos: "adjective", tier: "GRE",
    meaning: "Stubbornly refusing to change one's opinion or course of action.",
    etymology: "From Latin obduratus ‘hardened,’ from ob- ‘against’ + durare ‘to harden,’ from durus ‘hard.’",
    usage: "He remained obdurate even as every fact in his argument fell away.",
    syn: ["unyielding", "intransigent", "adamant"], ant: ["yielding", "amenable", "tractable"]
  },
  {
    word: "Obstreperous", pron: "/əb-ˈstre-pə-rəs/", pos: "adjective", tier: "GRE",
    meaning: "Noisy and difficult to control; unruly.",
    etymology: "From Latin obstreperus ‘clamorous,’ from ob- ‘against’ + strepere ‘to make a noise.’",
    usage: "The obstreperous toddler turned the quiet café into an impromptu percussion concert.",
    syn: ["unruly", "boisterous", "raucous"], ant: ["docile", "quiet", "orderly"]
  },
  {
    word: "Officious", pron: "/ə-ˈfi-shəs/", pos: "adjective", tier: "GRE",
    meaning: "Asserting authority or offering help in an annoyingly domineering way.",
    etymology: "From Latin officiosus ‘dutiful, obliging,’ from officium ‘service, duty.’ The helpfulness curdled into meddling over time.",
    usage: "An officious volunteer kept rearranging name tags no one had asked him to touch.",
    syn: ["meddlesome", "interfering", "bossy"], ant: ["unobtrusive", "reserved", "hands-off"]
  },
  {
    word: "Opprobrium", pron: "/ə-ˈprō-brē-əm/", pos: "noun", tier: "GRE",
    meaning: "Harsh criticism and public disgrace arising from shameful conduct.",
    etymology: "From Latin opprobrium ‘reproach,’ from ob- ‘against’ + probrum ‘disgraceful act.’",
    usage: "The data leak brought a year of opprobrium that no rebranding could wash away.",
    syn: ["condemnation", "disgrace", "obloquy"], ant: ["acclaim", "honor", "esteem"]
  },
  {
    word: "Parsimonious", pron: "/ˌpär-sə-ˈmō-nē-əs/", pos: "adjective", tier: "GRE",
    meaning: "Extremely unwilling to spend money or use resources; stingy.",
    etymology: "From Latin parsimonia ‘frugality,’ from parcere ‘to spare.’",
    usage: "The parsimonious landlord heated the lobby only on days the inspector visited.",
    syn: ["miserly", "stingy", "penurious"], ant: ["generous", "lavish", "munificent"]
  },
  {
    word: "Paucity", pron: "/ˈpȯ-sə-tē/", pos: "noun", tier: "GRE",
    meaning: "The presence of something in only small or insufficient amounts; scarcity.",
    etymology: "From Latin paucitas, from paucus ‘few’ — the same root as the Spanish poco.",
    usage: "The report's confident conclusions rested on a troubling paucity of actual data.",
    syn: ["scarcity", "dearth", "shortage"], ant: ["abundance", "plenty", "plethora"]
  },
  {
    word: "Pellucid", pron: "/pə-ˈlü-səd/", pos: "adjective", tier: "GRE",
    meaning: "Translucently clear; easy to understand.",
    etymology: "From Latin pellucidus, from per- ‘through’ + lucere ‘to shine.’",
    usage: "Her pellucid explanation made quantum tunneling feel, briefly, obvious.",
    syn: ["limpid", "lucid", "crystalline"], ant: ["opaque", "murky", "obscure"]
  },
  {
    word: "Perfunctory", pron: "/pər-ˈfəŋk-tə-rē/", pos: "adjective", tier: "GRE",
    meaning: "Carried out with a minimum of effort or reflection; done as a duty.",
    etymology: "From Latin perfunctorius ‘careless,’ from perfungi ‘to get through with, discharge.’",
    usage: "The inspection was perfunctory: a glance, a shrug, a signature.",
    syn: ["cursory", "mechanical", "halfhearted"], ant: ["thorough", "careful", "diligent"]
  },
  {
    word: "Phlegmatic", pron: "/fleg-ˈma-tik/", pos: "adjective", tier: "GRE",
    meaning: "Having an unemotional and calm disposition; hard to rouse.",
    etymology: "From Greek phlegma ‘inflammation, the humor phlegm’ — the bodily fluid medieval medicine blamed for a cool temperament.",
    usage: "Their phlegmatic pilot announced the engine trouble as if reading a grocery list.",
    syn: ["imperturbable", "stolid", "placid"], ant: ["excitable", "emotional", "volatile"]
  },
  {
    word: "Platitude", pron: "/ˈpla-tə-ˌtüd/", pos: "noun", tier: "GRE",
    meaning: "A remark used too often to be interesting or thoughtful, presented as if profound.",
    etymology: "From French platitude ‘flatness,’ from plat ‘flat’ — a flat, stale remark.",
    usage: "‘Everything happens for a reason’ was not the platitude she needed at that moment.",
    syn: ["cliché", "truism", "banality"], ant: ["epigram", "insight", "profundity"]
  },
  {
    word: "Probity", pron: "/ˈprō-bə-tē/", pos: "noun", tier: "GRE",
    meaning: "Complete honesty and integrity; uprightness.",
    etymology: "From Latin probitas ‘goodness,’ from probus ‘good, honest’ — the root of probe and prove.",
    usage: "Forty years of unquestioned probity made the judge's one lapse front-page news.",
    syn: ["integrity", "rectitude", "uprightness"], ant: ["corruption", "dishonesty", "turpitude"]
  },
  {
    word: "Profligate", pron: "/ˈprä-fli-gət/", pos: "adjective", tier: "GRE",
    meaning: "Recklessly extravagant or wasteful; also, shamelessly immoral.",
    etymology: "From Latin profligatus ‘ruined, dissolute,’ from profligare ‘to strike down, ruin.’",
    usage: "The profligate heir converted three fortunes into one remarkable wine cellar.",
    syn: ["extravagant", "spendthrift", "wasteful"], ant: ["frugal", "thrifty", "parsimonious"]
  },
  {
    word: "Propitious", pron: "/prə-ˈpi-shəs/", pos: "adjective", tier: "GRE",
    meaning: "Giving or indicating a good chance of success; favorable.",
    etymology: "From Latin propitius ‘favorable, gracious’ — originally of gods well-disposed toward mortals.",
    usage: "Clear skies and a tailwind made it a propitious morning for the record attempt.",
    syn: ["auspicious", "favorable", "opportune"], ant: ["inauspicious", "unfavorable", "ominous"]
  },
  {
    word: "Prosaic", pron: "/prō-ˈzā-ik/", pos: "adjective", tier: "GRE",
    meaning: "Commonplace and unromantic; lacking poetic beauty.",
    etymology: "From Latin prosa ‘prose,’ from prorsus ‘straightforward’ — language that runs straight on, unlike verse.",
    usage: "The comet's prosaic explanation — ice and dust — did nothing to dim its glamour.",
    syn: ["mundane", "pedestrian", "humdrum"], ant: ["poetic", "imaginative", "lyrical"]
  },
  {
    word: "Puerile", pron: "/ˈpyu̇r-əl/", pos: "adjective", tier: "GRE",
    meaning: "Childishly silly and immature.",
    etymology: "From Latin puerilis ‘boyish,’ from puer ‘boy, child.’",
    usage: "The debate descended into puerile name-calling before the first question was answered.",
    syn: ["juvenile", "infantile", "sophomoric"], ant: ["mature", "adult", "sophisticated"]
  },
  {
    word: "Pusillanimous", pron: "/ˌpyü-sə-ˈla-nə-məs/", pos: "adjective", tier: "GRE",
    meaning: "Showing a lack of courage or determination; timid.",
    etymology: "From Latin pusillus ‘very small’ + animus ‘spirit’ — literally small-spirited.",
    usage: "It was pusillanimous to circulate the complaint anonymously rather than raise a hand in the meeting.",
    syn: ["cowardly", "craven", "fainthearted"], ant: ["courageous", "bold", "stouthearted"]
  },
  {
    word: "Quixotic", pron: "/kwik-ˈsä-tik/", pos: "adjective", tier: "GRE",
    meaning: "Exceedingly idealistic; unrealistic and impractical.",
    etymology: "From Don Quixote, Cervantes's knight who tilted at windmills he took for giants.",
    usage: "Her quixotic plan to hand-deliver an apology to every customer somehow worked.",
    syn: ["idealistic", "impractical", "utopian"], ant: ["pragmatic", "realistic", "hardheaded"]
  },
  {
    word: "Recondite", pron: "/ˈre-kən-ˌdīt/", pos: "adjective", tier: "GRE",
    meaning: "Little known; dealing with profound or obscure subject matter.",
    etymology: "From Latin reconditus ‘hidden, put away,’ from recondere ‘to store back,’ from re- + condere ‘to put together, store.’",
    usage: "His dissertation on recondite medieval tax law found seven readers, all of them grateful.",
    syn: ["abstruse", "esoteric", "arcane"], ant: ["accessible", "straightforward", "plain"]
  },
  {
    word: "Sagacious", pron: "/sə-ˈgā-shəs/", pos: "adjective", tier: "GRE",
    meaning: "Having keen judgment; wise in a shrewd, practical way.",
    etymology: "From Latin sagax ‘of keen perception,’ originally of dogs with a sharp sense of smell.",
    usage: "The sagacious grandmother had predicted both the wedding and, gently, the divorce.",
    syn: ["wise", "shrewd", "judicious"], ant: ["foolish", "shortsighted", "injudicious"]
  },
  {
    word: "Salubrious", pron: "/sə-ˈlü-brē-əs/", pos: "adjective", tier: "GRE",
    meaning: "Favorable to health or well-being.",
    etymology: "From Latin salubris ‘healthful,’ from salus ‘health, safety’ — the root of salute and salvation.",
    usage: "Doctors once prescribed the salubrious mountain air for everything from gout to grief.",
    syn: ["healthful", "wholesome", "beneficial"], ant: ["unhealthy", "noxious", "insalubrious"]
  },
  {
    word: "Sardonic", pron: "/sär-ˈdä-nik/", pos: "adjective", tier: "GRE",
    meaning: "Grimly mocking or cynical; scornfully humorous.",
    etymology: "From Greek sardonios, linked to a Sardinian plant said to twist the eater's face into a bitter grin.",
    usage: "He met every corporate memo with the same sardonic raised eyebrow.",
    syn: ["mocking", "wry", "caustic"], ant: ["earnest", "sincere", "good-natured"]
  },
  {
    word: "Soporific", pron: "/ˌsä-pə-ˈri-fik/", pos: "adjective", tier: "GRE",
    meaning: "Tending to induce drowsiness or sleep; tediously boring.",
    etymology: "From Latin sopor ‘deep sleep’ + -ficus ‘making,’ from facere ‘to make.’",
    usage: "The afternoon budget review was so soporific that two directors synchronized their yawns.",
    syn: ["sleep-inducing", "somnolent", "tedious"], ant: ["stimulating", "invigorating", "rousing"]
  },
  {
    word: "Spurious", pron: "/ˈspyu̇r-ē-əs/", pos: "adjective", tier: "GRE",
    meaning: "Not being what it claims to be; false or fake, though superficially plausible.",
    etymology: "From Latin spurius ‘illegitimate child, false.’",
    usage: "The chart drew a spurious link between ice cream sales and software bugs.",
    syn: ["bogus", "counterfeit", "specious"], ant: ["genuine", "authentic", "valid"]
  },
  {
    word: "Supercilious", pron: "/ˌsü-pər-ˈsi-lē-əs/", pos: "adjective", tier: "GRE",
    meaning: "Behaving as though one is superior to others; haughtily disdainful.",
    etymology: "From Latin supercilium ‘eyebrow’ — the raised brow of contempt, from super ‘above’ + cilium ‘eyelid.’",
    usage: "The supercilious sommelier sighed at the table's choice before fetching it.",
    syn: ["haughty", "disdainful", "patronizing"], ant: ["humble", "modest", "deferential"]
  },
  {
    word: "Trenchant", pron: "/ˈtren-chənt/", pos: "adjective", tier: "GRE",
    meaning: "Vigorously incisive and effective; sharply perceptive.",
    etymology: "From Old French trenchier ‘to cut’ — the same blade as in trench.",
    usage: "One trenchant question from the back row dismantled the entire keynote.",
    syn: ["incisive", "cutting", "penetrating"], ant: ["vague", "feeble", "toothless"]
  },
  {
    word: "Turpitude", pron: "/ˈtər-pə-ˌtüd/", pos: "noun", tier: "GRE",
    meaning: "Depraved or wicked behavior or character.",
    etymology: "From Latin turpitudo ‘baseness,’ from turpis ‘vile, shameful.’",
    usage: "The contract's morals clause covered ‘acts of turpitude,’ a phrase the lawyers declined to define.",
    syn: ["depravity", "wickedness", "baseness"], ant: ["virtue", "probity", "rectitude"]
  },
  {
    word: "Umbrage", pron: "/ˈəm-brij/", pos: "noun", tier: "GRE",
    meaning: "Offense or annoyance, usually taken rather than given.",
    etymology: "From Latin umbra ‘shade, shadow’ — originally a shadowy suspicion that something offensive lurked in another's words.",
    usage: "She took umbrage at the word ‘adequate’ and drafted three replies before sending none.",
    syn: ["offense", "resentment", "pique"], ant: ["delight", "pleasure", "goodwill"]
  },
  {
    word: "Vacillate", pron: "/ˈva-sə-ˌlāt/", pos: "verb", tier: "GRE",
    meaning: "To waver between different opinions or actions; to be indecisive.",
    etymology: "From Latin vacillare ‘to sway, totter.’",
    usage: "He vacillated between the two job offers until both quietly expired.",
    syn: ["waver", "dither", "oscillate"], ant: ["decide", "commit", "resolve"]
  },
  {
    word: "Venal", pron: "/ˈvē-nəl/", pos: "adjective", tier: "GRE",
    meaning: "Open to bribery; able to be bought.",
    etymology: "From Latin venalis ‘for sale,’ from venum ‘sale.’ Not to be confused with venial, a forgivable sin.",
    usage: "The venal inspector's signature cost exactly two hundred dollars, cash preferred.",
    syn: ["corrupt", "bribable", "mercenary"], ant: ["incorruptible", "honest", "principled"]
  },
  {
    word: "Vicissitude", pron: "/və-ˈsi-sə-ˌtüd/", pos: "noun", tier: "GRE",
    meaning: "A change of circumstances or fortune, typically unwelcome.",
    etymology: "From Latin vicissitudo ‘change, alternation,’ from vicis ‘turn, change.’",
    usage: "Through every vicissitude — fire, flood, franchise coffee — the little bookshop endured.",
    syn: ["fluctuation", "upheaval", "reversal"], ant: ["stability", "constancy"]
  },
  {
    word: "Vitriol", pron: "/ˈvi-trē-əl/", pos: "noun", tier: "GRE",
    meaning: "Cruel and bitter criticism; corrosive spite.",
    etymology: "From Latin vitriolum ‘sulfuric acid,’ from vitrum ‘glass,’ for the acid's glassy crystals — caustic chemistry turned caustic speech.",
    usage: "The comment section's vitriol convinced her to write the sequel out of pure defiance.",
    syn: ["venom", "spite", "invective"], ant: ["kindness", "warmth", "praise"]
  },
  {
    word: "Zealot", pron: "/ˈze-lət/", pos: "noun", tier: "GRE",
    meaning: "A person who is fanatical and uncompromising in pursuit of ideals.",
    etymology: "From Greek zēlōtēs ‘emulator, zealous admirer’ — originally a member of a Jewish sect that fiercely resisted Rome.",
    usage: "A keyboard-shortcut zealot, he winced every time a colleague reached for the mouse.",
    syn: ["fanatic", "extremist", "true believer"], ant: ["moderate", "skeptic", "pragmatist"]
  },
  {
    word: "Petrichor", pron: "/ˈpe-trə-ˌkȯr/", pos: "noun", tier: "Arcane",
    meaning: "The pleasant, earthy smell that accompanies the first rain after dry weather.",
    etymology: "Coined in 1964 from Greek petra ‘stone’ + ichōr, the ethereal fluid in the veins of the gods.",
    usage: "She opened the windows wide to let the petrichor fill the apartment.",
    syn: ["earthiness", "rain-scent"], ant: ["mustiness", "staleness"]
  },
  {
    word: "Susurrus", pron: "/su̇-ˈsər-əs/", pos: "noun", tier: "Arcane",
    meaning: "A soft whispering or rustling sound; a murmur.",
    etymology: "From Latin susurrus ‘a humming, whispering’ — an onomatopoeia you can hear in the word itself.",
    usage: "The susurrus of the aspen leaves was the only argument the forest ever made.",
    syn: ["whisper", "murmur", "rustle"], ant: ["clamor", "din", "roar"]
  },
  {
    word: "Crepuscular", pron: "/kri-ˈpəs-kyə-lər/", pos: "adjective", tier: "Arcane",
    meaning: "Of or resembling twilight; (of animals) active at dawn and dusk.",
    etymology: "From Latin crepusculum ‘twilight,’ from creper ‘dusky, dark.’",
    usage: "Deer are crepuscular, which is why the dusk highway signs mean it.",
    syn: ["twilit", "dusky", "dim"], ant: ["noonday", "bright", "midnight"]
  },
  {
    word: "Tintinnabulation", pron: "/ˌtin-tə-ˌna-byə-ˈlā-shən/", pos: "noun", tier: "Arcane",
    meaning: "A ringing or tinkling sound, as of bells.",
    etymology: "From Latin tintinnabulum ‘bell,’ from tintinnare ‘to ring’ — popularized by Poe's poem ‘The Bells.’",
    usage: "The cat wove through the shop shelves to a soft tintinnabulation of ornament bells.",
    syn: ["ringing", "chiming", "peal"], ant: ["silence", "hush"]
  },
  {
    word: "Gallimaufry", pron: "/ˌga-lə-ˈmȯ-frē/", pos: "noun", tier: "Arcane",
    meaning: "A confused jumble or hodgepodge of things.",
    etymology: "From French galimafrée ‘a hash of leftovers,’ of uncertain kitchen origin.",
    usage: "The junk drawer held a gallimaufry of batteries, twine, and keys to forgotten doors.",
    syn: ["hodgepodge", "medley", "farrago"], ant: ["order", "uniformity"]
  },
  {
    word: "Ultracrepidarian", pron: "/ˌəl-trə-ˌkre-pə-ˈder-ē-ən/", pos: "noun", tier: "Arcane",
    meaning: "A person who gives opinions on matters beyond their knowledge.",
    etymology: "From Latin ultra crepidam ‘beyond the sandal’ — Pliny tells of a cobbler who critiqued a painting's sandal, then the rest, drawing the painter Apelles's rebuke.",
    usage: "Every comment thread has its ultracrepidarian, confidently wrong about epidemiology and engine repair alike.",
    syn: ["know-it-all", "armchair expert"], ant: ["specialist", "authority"]
  },
  {
    word: "Absquatulate", pron: "/ab-ˈskwä-chə-ˌlāt/", pos: "verb", tier: "Arcane",
    meaning: "To leave abruptly; to make off, often with something.",
    etymology: "A jocular 1830s American coinage, mock-Latin built from abscond + squattle + perambulate.",
    usage: "The raccoon absquatulated with an entire bag of marshmallows before anyone could react.",
    syn: ["flee", "decamp", "abscond"], ant: ["remain", "stay", "linger"]
  },
  {
    word: "Brobdingnagian", pron: "/ˌbräb-diŋ-ˈna-gē-ən/", pos: "adjective", tier: "Arcane",
    meaning: "Gigantic; of enormous size.",
    etymology: "From Brobdingnag, the land of giants in Swift's Gulliver's Travels (1726).",
    usage: "The deli's brobdingnagian sandwich required structural engineering to eat.",
    syn: ["colossal", "gargantuan", "titanic"], ant: ["tiny", "lilliputian", "minuscule"]
  },
  {
    word: "Flibbertigibbet", pron: "/ˈfli-bər-tē-ˌji-bət/", pos: "noun", tier: "Arcane",
    meaning: "A frivolous, flighty, or excessively talkative person.",
    etymology: "Middle English onomatopoeia for idle chatter; Shakespeare borrowed it in King Lear as a fiend's name.",
    usage: "She played the flibbertigibbet at parties while quietly memorizing every conversation.",
    syn: ["scatterbrain", "chatterbox"], ant: ["sobersides", "stoic"]
  },
  {
    word: "Fuliginous", pron: "/fyu̇-ˈli-jə-nəs/", pos: "adjective", tier: "Arcane",
    meaning: "Sooty or dusky; colored like smoke or soot.",
    etymology: "From Latin fuligo ‘soot.’",
    usage: "A fuliginous haze hung over the valley long after the fires were out.",
    syn: ["sooty", "smoky", "dusky"], ant: ["bright", "clear", "luminous"]
  },
  {
    word: "Lucubration", pron: "/ˌlü-kyə-ˈbrā-shən/", pos: "noun", tier: "Arcane",
    meaning: "Laborious study or writing, especially done late at night; its often pedantic product.",
    etymology: "From Latin lucubrare ‘to work by lamplight,’ from lux ‘light.’",
    usage: "The footnoted lucubrations of his grad-school years filled two boxes he could not throw away.",
    syn: ["study", "cogitation", "treatise"], ant: ["idleness", "improvisation"]
  },
  {
    word: "Pandiculation", pron: "/pan-ˌdi-kyə-ˈlā-shən/", pos: "noun", tier: "Arcane",
    meaning: "The full-body stretch and yawn performed on waking.",
    etymology: "From Latin pandiculari ‘to stretch oneself,’ from pandere ‘to spread out.’",
    usage: "The cat's pandiculation was so luxurious it made everyone in the room yawn.",
    syn: ["stretching", "yawning"], ant: ["stillness"]
  },
  {
    word: "Perendinate", pron: "/pə-ˈren-də-ˌnāt/", pos: "verb", tier: "Arcane",
    meaning: "To put something off until the day after tomorrow; to defer indefinitely.",
    etymology: "From Latin perendie ‘on the day after tomorrow.’ Procrastinate's more ambitious cousin — cras is merely ‘tomorrow.’",
    usage: "He didn't procrastinate on his taxes; he perendinated, which felt more deliberate.",
    syn: ["postpone", "defer", "procrastinate"], ant: ["expedite", "hasten"]
  },
  {
    word: "Psithurism", pron: "/ˈsi-thə-ˌri-zəm/", pos: "noun", tier: "Arcane",
    meaning: "The sound of wind whispering through trees.",
    etymology: "From Greek psithuros ‘whispering.’ A 19th-century coinage that never quite caught on, to English's loss.",
    usage: "They pitched the tent where the psithurism of the pines would do the lullaby's work.",
    syn: ["rustling", "susurrus"], ant: ["stillness", "silence"]
  },
  {
    word: "Sprezzatura", pron: "/ˌspret-sə-ˈtu̇r-ə/", pos: "noun", tier: "Arcane",
    meaning: "Studied carelessness; making the difficult look effortless.",
    etymology: "Italian, coined by Castiglione in The Book of the Courtier (1528) for the art of concealing art.",
    usage: "His ‘thrown-together’ outfit was pure sprezzatura — forty minutes of practiced nonchalance.",
    syn: ["effortlessness", "nonchalance"], ant: ["laboriousness", "visible effort"]
  },
  {
    word: "Tergiversate", pron: "/ˈtər-ji-vər-ˌsāt/", pos: "verb", tier: "Arcane",
    meaning: "To make evasive statements; to repeatedly change one's attitude or loyalties.",
    etymology: "From Latin tergiversari ‘to turn one's back, shuffle,’ from tergum ‘back’ + versare ‘to turn.’",
    usage: "Asked to name a favorite child, the politician tergiversated magnificently.",
    syn: ["equivocate", "vacillate", "flip-flop"], ant: ["commit", "stand firm"]
  },
  {
    word: "Velleity", pron: "/və-ˈlē-ə-tē/", pos: "noun", tier: "Arcane",
    meaning: "A wish or inclination too weak to prompt any action.",
    etymology: "From Latin velle ‘to wish.’ Scholastic philosophers coined it for the faintest grade of volition.",
    usage: "His plan to learn the cello remained a velleity, fondly mentioned and never begun.",
    syn: ["whim", "fancy", "inclination"], ant: ["resolve", "determination", "drive"]
  },
  {
    word: "Widdershins", pron: "/ˈwi-dər-ˌshinz/", pos: "adverb", tier: "Arcane",
    meaning: "In a direction contrary to the sun's course; counterclockwise.",
    etymology: "From Middle Low German weddersinnes ‘against the way,’ long associated in folklore with bad luck.",
    usage: "Superstition forbade walking widdershins around the chapel after dark.",
    syn: ["counterclockwise", "anticlockwise"], ant: ["clockwise", "sunwise", "deasil"]
  },
  {
    word: "Mumpsimus", pron: "/ˈməmp-sə-məs/", pos: "noun", tier: "Arcane",
    meaning: "A stubbornly held mistaken belief or custom; one who clings to it after correction.",
    etymology: "From a tale of a priest who misread Latin sumpsimus as ‘mumpsimus’ for forty years and refused to change when corrected.",
    usage: "Calling the Wi-Fi router ‘the modem’ was the family mumpsimus no correction could dislodge.",
    syn: ["misbelief", "pigheadedness"], ant: ["correction", "open-mindedness"]
  },
  {
    word: "Borborygmus", pron: "/ˌbȯr-bə-ˈrig-məs/", pos: "noun", tier: "Arcane",
    meaning: "A rumbling or gurgling noise made by fluid and gas in the intestines.",
    etymology: "From Greek borborygmos, an onomatopoeia for a growling stomach.",
    usage: "A thunderous borborygmus echoed through the silent exam hall, and twelve heads turned.",
    syn: ["stomach rumble", "gurgle"], ant: ["silence"]
  },
  {
    word: "Cachinnate", pron: "/ˈka-kə-ˌnāt/", pos: "verb", tier: "Arcane",
    meaning: "To laugh loudly and immoderately.",
    etymology: "From Latin cachinnare ‘to laugh aloud,’ an onomatopoeia of the guffaw itself.",
    usage: "Something in the eulogy's third paragraph made the widow cachinnate, and the church exhaled with her.",
    syn: ["guffaw", "roar", "howl"], ant: ["titter", "chuckle", "snicker"]
  },
  {
    word: "Logomachy", pron: "/lō-ˈgä-mə-kē/", pos: "noun", tier: "Arcane",
    meaning: "A dispute about words; an argument that is merely verbal.",
    etymology: "From Greek logos ‘word’ + machē ‘battle.’",
    usage: "The committee's hour-long logomachy over ‘shall’ versus ‘will’ settled nothing.",
    syn: ["word-battle", "quibbling", "semantics"], ant: ["accord", "substance"]
  },
  {
    word: "Noctambulist", pron: "/näk-ˈtam-byə-list/", pos: "noun", tier: "Arcane",
    meaning: "A sleepwalker; one who walks about at night.",
    etymology: "From Latin nox ‘night’ + ambulare ‘to walk.’",
    usage: "The hotel posted a discreet notice for noctambulists: the roof door locks behind you.",
    syn: ["sleepwalker", "somnambulist"], ant: ["sound sleeper"]
  },
  {
    word: "Snollygoster", pron: "/ˈsnä-lē-ˌgä-stər/", pos: "noun", tier: "Arcane",
    meaning: "A shrewd, unprincipled person, especially a politician guided by personal advantage.",
    etymology: "19th-century American slang, possibly from the snallygaster, a mythical Maryland monster.",
    usage: "The town had elected snollygosters before, but never one who renamed the park after himself.",
    syn: ["opportunist", "charlatan"], ant: ["statesman", "idealist"]
  },
  {
    word: "Deipnosophist", pron: "/dīp-ˈnä-sə-fist/", pos: "noun", tier: "Arcane",
    meaning: "A person skilled in the art of dinner-table conversation.",
    etymology: "From Greek deipnon ‘dinner’ + sophistēs ‘expert,’ after Athenaeus's Deipnosophistae, a banquet of learned talk.",
    usage: "Seat one true deipnosophist mid-table and the whole dinner party finds its rhythm.",
    syn: ["conversationalist", "raconteur"], ant: ["bore", "wallflower"]
  },
  {
    word: "Clinquant", pron: "/ˈkliŋ-kənt/", pos: "adjective", tier: "Arcane",
    meaning: "Glittering with gold or tinsel; showily but cheaply splendid.",
    etymology: "From French clinquant ‘tinsel,’ from Dutch klinken ‘to clink, ring.’",
    usage: "The lobby's clinquant chandelier promised a luxury the rooms upstairs quietly retracted.",
    syn: ["tinselly", "gaudy", "flashy"], ant: ["understated", "plain", "austere"]
  },
  {
    word: "Scripturient", pron: "/skrip-ˈtu̇r-ē-ənt/", pos: "adjective", tier: "Arcane",
    meaning: "Having a violent urge to write.",
    etymology: "From Latin scripturire ‘to desire to write,’ a desiderative of scribere ‘to write.’",
    usage: "Three espressos left her scripturient, filling napkins when the notebook ran out.",
    syn: ["graphomaniacal", "prolific"], ant: ["blocked", "reticent"]
  },
  {
    word: "Quockerwodger", pron: "/ˈkwä-kər-ˌwä-jər/", pos: "noun", tier: "Arcane",
    meaning: "A wooden puppet on strings; hence, a politician controlled by someone else.",
    etymology: "Victorian English slang of obscure origin; the political sense followed the toy almost immediately.",
    usage: "The columnist dismissed the new minister as a quockerwodger whose strings led to the donor class.",
    syn: ["puppet", "marionette", "figurehead"], ant: ["free agent", "independent"]
  },
  {
    word: "Obambulate", pron: "/ō-ˈbam-byə-ˌlāt/", pos: "verb", tier: "Arcane",
    meaning: "To walk about aimlessly; to wander.",
    etymology: "From Latin ob- ‘about’ + ambulare ‘to walk.’",
    usage: "Jet-lagged and happy, they obambulated through the old quarter until the bakeries opened.",
    syn: ["wander", "meander", "roam"], ant: ["beeline", "march"]
  },
  {
    word: "Eucatastrophe", pron: "/ˌyü-kə-ˈta-strə-fē/", pos: "noun", tier: "Arcane",
    meaning: "A sudden and favorable turn of events in a story; a joyous resolution against all odds.",
    etymology: "Coined by J.R.R. Tolkien from Greek eu- ‘good’ + katastrophē ‘overturning’ — the catastrophe that saves.",
    usage: "The rescue arrived in the final paragraph, a eucatastrophe that made the whole bleak novel worth it.",
    syn: ["happy ending", "deliverance"], ant: ["catastrophe", "tragedy"]
  }
];
