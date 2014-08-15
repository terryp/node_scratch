
// Description:
//   A collection of logs from Star Trek: The Original Series.
//   There are five kinds of logs specifically:
//   1. Captain's Log
//   2. Enterprise Log
//   3. Personal Log
//   4. Medical Log
//   5. Ship's Log
//
// Dependencies:
//   None
//
// Configuration:
//   None
//
// Commands:
//   hubot captain's log - returns a random captain's log entry
//   hubot enterprise log - returns a random enterprise log entry
//   hubot personal log - returns a random personal log entry
//   hubot medical log - returns a random medical log entry
//   hubot ship's log - returns a random ship's log entry
//   hubot stardate - returns a version of stardate
//
// Author:
//   Terry Peppers

var rawLogs = {
    "Captain's Log" : [
        {stardate: "1312.4.", entry: "The impossible has happened. From directly ahead, we're picking up a recorded distress signal, the call letters of a vessel which has been missing for over two centuries. Did another Earth ship once probe out of the galaxy as we intend to do? What happened to it out there? Is this some warning they've left behind?"},
        {stardate: "1312.9.", entry: "Ship's condition - heading back on impulse power only. Main engines burned out. The ship's space warp ability, gone. Earth bases which were only days away are now years in the distance. Our overriding question now is, what destroyed the Valiant? They lived through the barrier just as we have. What happened to them after that?"},
        {stardate: "1313.1.", entry: "We're now approaching Delta Vega. Course set for a standard orbit. This planet, completely uninhabited, is slightly smaller than earth. Desolate, but rich in crystal and minerals. Kelso's task - transport down with a repair party, try to regenerate the main engines, save the ship. Our task - transport down a man I've known for 15 years, and if we're successful, maroon him there."},
        {stardate: "1313.3.", entry: "Note commendations on Lieutenant Kelso and the engineering staff. In orbit above us, the engines of the Enterprise are almost fully regenerated. Balance of the landing party is being transported back up. Mitchell, whatever he's become, keeps changing, growing stronger by the minute."},
        {stardate: "1313.8.", entry: "Add to official losses, Dr Elizabeth Dehner. Be it noted she gave her life in performance of her duty. Lieutenant Commander Gary Mitchell. Same notation."},
        {stardate: "1512.2.", entry: "On our third day of star mapping, an unexplained cubical object blocked our vessel's path. On the bridge, Mr Spock immediately ordered general alert. My location - sickbay. Quarterly physical check."},
        {stardate: "1513.8.", entry: "Star maps reveal no indication of habitable planets nearby. Origin and purpose of the cube still unknown. We've been here, held motionless, for 18 hours."},
        {stardate: "1514.0.", entry: "The cube has been destroyed. Ship's damage, minor. But my next decision, major - probe on ahead or turn back."},
        {stardate: "1514.1.", entry: "The Enterprise is in tow. To this point no resistance has been offered. My plan - a show of resignation. Balok's tractor beam has to be a heavy drain of power on a small ship. Question. Will he grow careless?"},
        {stardate: "1329.8.", entry: "The U.S.S. Enterprise in pursuit of an unidentified vessel."},
        {stardate: "1329.1.", entry: "We've taken aboard from unregistered transport vessel, its captain and--and three unusual females. These women have a mysterious magnetic effect on the male members of my crew. Including myself. Explanation unknown at present."},
        {stardate: "1329.2.", entry: "On board the U.S.S. Enterprise, a ship's hearing has been convened against the transport vessel's captain. I'm becoming concerned about the almost hypnotic effect produced by the women."},
        {stardate: "1330.1.", entry: "Position, 14 hours out of Rigel XII. We're on auxiliary impulse engines. Fuel low, barely sufficient to achieve orbit over the planet. Lithium replacements are now imperative. The effect of Mudd's women on my crew continues to grow, still totally unexplained. Harry Mudd is confined to his quarters under guard."},
        {stardate: "1330.3.", entry: "Transporting down to surface of planet Rigel XII to acquire replacement lithium crystals. Expect further difficulty from miners."},
        {stardate: "1330.4.", entry: "I've transported aboard the Enterprise to implement search with infrared scanners and sensing system. Magnetic storms on the planet's surface are cutting down speed and efficiency of our equipment. Search now in progress for three hours, 18 minutes."},
        {stardate: "1330.6.", entry: "Have expended all but 43 minutes of power. Ship's condition, critical. Search now in progress, seven hours, 31 minutes. Magnetic storms are easing."},
        {stardate: "1672.1.", entry: "Specimen-gathering mission on planet Alpha 177. Unknown to any of us during this time, a duplicate of me, some strange alter ego, had been created by the transporter malfunction."},
        {stardate: "1672.9.", entry: "On the planet's surface, temperatures are beginning to drop, our landing party there in growing jeopardy. Due to the malfunction of the ship's transporter, an unexplained duplicate of myself definitely exists."},
        {stardate: "1673.1.", entry: "Something has happened to me. Somehow, in being duplicated, I have lost my strength of will. Decisions are becoming more and more difficult."},
        {stardate: "1673.5.", entry: "Transporter still inoperable. My negative self is under restraint in sick bay. My own indecisiveness growing. My force of will steadily weakening. On the planet, condition critical. Surface temperature is 75 degrees below zero, still dropping."},
        {stardate: "1673.1.", entry: "Entry made by Second Officer Spock. Captain Kirk retains command of this vessel, but his force of will rapidly fading. Condition of landing party critical. Transporter unit still under repair."},
        {stardate: "1513.1.", entry: "Our position, orbiting planet M-113. Onboard the Enterprise, Mr Spock, temporarily in command. On the planet, the ruins of an ancient and long dead civilisation. Ship's surgeon McCoy and myself are now beaming down to the planet's surface. Our mission, routine medical examination of archaeologist Robert Crater, and his wife, Nancy. Routine, but for the fact that Nancy Crater is that one woman in Dr. McCoy's past."},
        {stardate: "1513.1.", entry: "Since our mission was routine, we had beamed down to the planet without suspicion. We were totally unaware that each member of the landing party was seeing a different woman. A different Nancy Crater."},
        {stardate: "1513.4.", entry: "In orbit around planet M-113. One crewman, member of the landing party, dead by violence. Cause, unknown. We are certain the cause of death was not poison."},
        {stardate: "1513.8.", entry: "I am now certain that the violent death of my crewman was caused by some strange life-form."},
        {stardate: "1513.8.", entry: "Armed and able-bodied crewmen are not attacked and slaughtered this easily. Apparently the killer can immobilize them as it approaches, perhaps with some hypnotic or paralysing power. The answer lies with Professor Crater."},
        {stardate: "1513.8.", entry: "The Enterprise has been invaded by a creature capable of assuming any form, and with the capacity to paralyse and draw the life from any one of us."},
        {stardate: "1703.1.", entry: "Our position, orbiting Psi 2000. An ancient world, now a frozen wasteland about to rip apart, in its death throes. Our mission - pick up a scientific party below, observe the disintegration of the planet."},
        {stardate: "1704.2.", entry: "The science party we were to have picked up has been found dead. Life support systems had been turned off. Station personnel frozen to death. Conditions highly unusual. Meanwhile, we remain in orbit to complete our mission - close scientific measurement of the break-up of this planet."},
        {stardate: "1704.2.", entry: "Our orbit - tightening. Our need for efficiency - critical. But unknown to us, a totally new and unusual disease has been brought aboard."},
        {stardate: "1704.4.", entry: "Ship out of control, spiraling down towards planet Psi 2000. We have 19 minutes of life left, without engine power or helm control."},
        {stardate: "1704.4.", entry: "The Enterprise spiraling down, out of control. Ship's outer skin heating rapidly due to friction with planet atmosphere."},
        {stardate: "1533.6", entry: "Now manoeuvering to come alongside cargo vessel Antares. Its captain and first officer are beaming over to us with an unusual passenger."},
        {stardate: "1533.7.", entry: "We have taken aboard an unusual passenger for transport to Colony Alpha 5. Charles Evans, the sole survivor of a transport crash 14 years ago. The child, alone from age 3, has not only survived, but has grown to intelligent, healthy adolescence."},
        {stardate: "1535.8.", entry: "UESPA headquarters notified of the mysterious loss of science probe vessel Antares."},
        {stardate: "1709.2.", entry: "Patrolling outposts guarding the neutral zone between planets Romulus and Remus and the rest of the galaxy, received emergency call from Outpost 4. The USS Enterprise is moving to investigate and assist."},
        {stardate: "1709.6.", entry: "We are at the Neutral Zone. Have lost contact with the intruder. No reaction on our motion sensors, but believe the Romulan vessel to be somewhere close by. With all engines and systems shut down, the Enterprise is also playing the silent waiting game, in hope of regaining contact."},
        {stardate: "1709.6.", entry: "Now motionless for nine hours, 47 minutes."},
        {stardate: "2712.4.", entry: "A signal from planet Exo III. Dr Roger Korby has been located, he and part of his expedition remaining alive due to the discovery of underground ruins left by the former inhabitants of this world."},
        {stardate: "2715.1.", entry: "Exchanged cargo with penal colony on Tantalus V. Have departed without going ashore."},
        {stardate: "2715.2.", entry: "Standard orbit, planet Tantalus V. Mission - routine investigation and report as per ship's surgeon's medical Log As for my last entry, it seems I will get to meet Dr Adams at last. However, I would have preferred other circumstances."},
        {stardate: "2713.5.", entry: "In the distant reaches of our galaxy, we have made an astonishing discovery - Earth-type radio signals coming from a planet which apparently is an exact duplicate of the Earth. It seems impossible, but there it is."},
        {stardate: "2713.6.", entry: "The building Miri led us to also housed an automatic transmission station, which sent out the signal that drew us to this planet. We also discovered something else - that the blues splotches, characteristic of the unknown disease, had appeared on each of us, with the exception of Mr Spock. There was a well-equipped laboratory in the building. Dr McCoy took tissue samples of each of us, in an attempt to isolate the organism responsible."},
        {stardate: "2713.7.", entry: "Dr McCoy's biocomputer and a portable electronic microscope have been beamed down from the Enterprise. They will be used in conjunction with computer banks on board ship."},
        {stardate: "2713.7.", entry: "It's the second day of the seven left to us. We've found nothing. Enterprise is standing by with it's labs, computers, ready to assist us. There's no data, no stopping point."},
        {stardate: "2717.3.", entry: "Three days, seven hours left to us. Investigation proves that the supply of food left in the area is running dangerously low. Unless something is done, the children will starve in a few months. In addition, the disease is working on each of us according to Dr McCoy's prediction. Our tempers are growing short, and we're no further along than we were two days ago."},
        {stardate: "2817.6.", entry: "Starship Enterprise diverted from scheduled course. Purpose - to confirm discovery by Dr. Thomas Leighton of an extraordinary new synthetic food which would totally end the threat of famine on Signia Minor, a nearby Earth colony."},
        {stardate: "2818.9.", entry: "There are many questions in my mind, too many, perhaps, about the actor Karidian, and his daughter. For personal reasons, I'm almost afraid to learn the answers."},
        {stardate: "2819.1.", entry: "Ship's officer Riley's condition worsening. Dr. McCoy making lab analysis to determine cause and antidote. Entire crew deeply concerned."},
        {stardate: "2819.8.", entry: "Suspect under surveillance. Strategic areas under double guard. Performance of the Karidian Players taking place as scheduled."},
        {stardate: "2821.5.", entry: "On route to Makus III with a cargo of medical supplies. Our course leads us past Murasaki 312, a quasar-like formation. Vague, undefined, a priceless opportunity for scientific investigation. On board is Galactic High Commissioner Ferris, overseeing the delivery of the medicines to Makus III."},
        {stardate: "2821.7.", entry: "The electromagnetic phenomenon known as Murasaki 312 whirls like some angry blight in space, a depressive reminder that seven of our shipmates still have not been heard from. Equally bad, the effect has rendered our normal searching systems useless. Without them, we are blind and almost helpless."},
        {stardate: "2822.3.", entry: "We continue to search but I find it more difficult each moment to ward off a sense of utter futility and great loss."},
        {stardate: "2823.1.", entry: "Our landing parties are on the surface of Taurus II. We continue to hope. Instruments are slowly returning to an operable condition as the ion storm slowly disperses. On the ship, we can only wait helplessly."},
        {stardate: "2823.1.", entry: "The search parties have returned to the ship, and the Columbus is on its way back. I have been compelled to abandon the search."},
        {stardate: "2947.3.", entry: "We have been through a severe ion storm. One crewman is dead. Ship's damage is considerable. I've ordered a non-scheduled layover on Starbase 11 for repairs. A full report of damages was made to the commanding officer of Starbase 11, Commodore Stone."},
        {stardate: "2948.5.", entry: "Starship Enterprise remains in orbit around Starbase 11, full repair's in progress. I have been ordered to standby on Starbase 11 until the inquiry into the death of Lieutenant Commander Finney can be conducted. I am confident of the outcome."},
        {stardate: "2948.9.", entry: "The officers who will comprise my court martial board are proceeding to Starbase 11. Meanwhile, repairs on the Enterprise are almost complete."},
        {stardate: "2949.9.", entry: "The evidence presented by the visual playback to my general court martial was damning. I suspect even my attorney has begun to doubt me."},
        {stardate: "2950.1.", entry: "After due consideration, the general court martial has reconvened on board the Enterprise. Sam Cogley had gone ashore to bring Jame Finney on board. We both felt that Jame's presence would make Finney easier to handle, in the event Finney really were alive. Beaten and sobbing, Finney had told me where he had sabotaged the prime energy circuits. The damage was considerable, but not irreparable. With luck, I would be able to effect repairs before our orbit decayed completely."},
        {stardate: "3012.4.", entry: "Despite our best efforts to disengage computers, the Enterprise is still locked on a heading for the mysterious planet, Talos IV. Meanwhile, as required by Starfleet general orders, a preliminary hearing on Lieutenant Commander Spock is being convened. And in all the years of my service, this is the most painful moment I've ever faced."},
        {stardate: "3012.6.", entry: "General court martial convened. Mr. Spock has again waived counsel, and has entered a plea of guilty."},
        {stardate: "3012.6.", entry: "Mr Spock, on trial for mutiny, has forced the court to accept unusual evidence. On our monitor screen, the voyage of Captain Pike and the Enterprise to the one forbidden world in all the galaxy."},
        {stardate: "3025...", entry: "We are orbiting an uninhabited planet in the Omicron Delta region, a planet remarkably like Earth or how we remember Earth to be - park-like, beautiful, green, flowers, trees, green lawn, quiet and restful. Almost too good to be true."},
        {stardate: "3025.8.", entry: "Investigation of this increasingly unusual planet continues, and we are seeing things that cannot possibly exist, yet they are undeniably real."},
        {stardate: "3025.8.", entry: "All contact with the Enterprise has been lost. We're trapped here. Our ship's surgeon, my personal friend, is dead. We're certain now that whatever we're facing is terribly real."},
        {stardate: "2125.7.", entry: "Science Officer Spock reporting for Captain Kirk. We've completed 14th orbit of this planet without establishing contact with our missing officers or the parties sent to find them. Subspace communications remain blocked. However, by diverting impulse power to our sensors, we have made them operable, and we have detected one small area on the surface which seems relatively stable."},
        {stardate: "2126.1,", entry: "The whole bridge crew are the unwilling guests of the creature who calls himself Trelane. We are weaponless, powerless, and our only hope of escape with the Enterprise lies in playing his games. I've decided to make my move with the 'field-of-honor' game, and everything depends on my one chance with the ancient duelling pistol."},
        {stardate: "2126.3.", entry: "First Officer Spock reporting. Still no word from Captain Kirk on the surface below us. Waiting time is almost up. I will soon be forced to attempt departure, as per instructions."},
        {stardate: "3045.6.", entry: "The Enterprise has responded to a call from Earth observation outpost on Cestus III. On landing, we have discovered that the outpost has been destroyed."},
        {stardate: "3045.6.", entry: "We have beamed back to the Enterprise and immediately set out in pursuit of the alien vessel. It appears to be headed towards a largely unexplored section of the galaxy."},
        {stardate: "3046.2.", entry: "We are in hot pursuit of the alien vessel which destroyed the Earth outpost on Cestus III. The Enterprise is dead in space, stopped cold during her pursuit of an alien raider by mysterious forces. And I have been somehow whisked off the bridge and placed on the surface of an asteroid, facing the captain of the alien ship. Weaponless, I face the creature the Metrons called a Gorn. Large. Reptilian. Like most humans, I seem to have an instinctive revulsion to reptiles. I must fight to remember that this is an intelligent, highly advanced individual, the captain of a starship, like myself. Undoubtedly a dangerously clever opponent. This is Captain James Kirk of the Starship Enterprise. Whoever finds this, please get it to Starfleet Command. I'm engaged in personal combat with a creature apparently called a Gorn. He's immensely strong. Already, he has withstood attacks from me that would have killed a human being. Fortunately, though strong, he is not agile. The agility, and, I hope, the cleverness, is mine. The Metrons, the creatures that sent us both here, said that the surface of the planet provides the raw material... to construct weapons. There's very little here - scrub brush, rocks, an abundance of mineral deposits - but no weapons in the conventional sense. Still, I need to find one. Bare-handed, against the Gorn, I have no chance. A large deposit of diamonds on the surface. Perhaps the hardest substance known in the universe. Beautifully crystallised and pointed, but too small to be useful as a weapon. An incredible fortune in stones. Yet I would trade them all for a hand phaser, or a good, solid club. Yet the Metrons said there would be weapons... if I could find them. Where? What kind? This may be my last entry. I am almost exhausted. Unless I find the weapon the Metron mentioned, I have very little time left. Native sulphur, diamonds... This place is a mineralogist's dream! Yet... there is something about sulphur... Something very old. Something... If only I could remember."},
        {stardate: "3087.6.", entry: "While investigating an uncharted planet, the Enterprise, and at least this entire quadrant of space, has been subjected to violent, unexplained stress and force. Sensors have reported the presence of a human being on the planet below who might be connected with the phenomenon. With my first officer and a security team, I have set out in search of him."},
        {stardate: "3088.3.", entry: "We continue to orbit the dead planet, which seems to be the source of the phenomenon which has struck the Enterprise, and all sections of the galaxy, once again. As for Lazarus, the story he tells me about the humanoid continues to trouble me."},
        {stardate: "3088.7.", entry: "We are no closer to finding an answer to the strange phenomenon than we were at the beginning. Not only have two of my crewmen been attacked, two of our dilithium crystals are missing, and without them, the Enterprise cannot operate at full power. They must be found."},
        {stardate: "3113.2.", entry: "We were en route to Starbase 9 for resupply when a black star of high gravitational attraction began to drag us toward it. It required all warp power in reverse to pull us away from the star. But, like snapping a rubber band, the breakaway sent us plunging through space, out of control, to stop here, wherever we are."},
        {stardate: "3113.2.", entry: "Engineering Officer Scott informs warp engines damaged, can be made operational and re-energized."},
        {stardate: "3113.7.", entry: "Our engines are being repaired, but we are still locked in time. And we have aboard a passenger whom we do not want, and we cannot return."},
        {stardate: "3113.9.", entry: "First Officer Spock recording. Due to an unfortunate accident, we have taken aboard another unwanted passenger."},
        {stardate: "3114.1.", entry: "We must make an attempt to break free of this time, or we and our reluctant passengers will remain its prisoners. All we have is a theory and a few facts."},
        {stardate: "3156.2.", entry: "While orbiting planet Beta III, trying to find some trace of the starship Archon that disappeared here a hundred years ago, a search party consisting of two Enterprise officers were sent to the planet below. Mr Sulu has returned, but in a highly agitated mental state. His condition requires I beam down with an additional search detail."},
        {stardate: "3157.4.", entry: "The Enterprise, still under attack by some sort of heat rays from the surface of Beta III, is now being commanded by Engineering Officer Scott. The shore party has been taken by the creature called Landru."},
        {stardate: "3158.7.", entry: "The Enterprise is preparing to leave Beta III in star system C-111. Sociologist Lindstrom is remaining behind with a party of experts who will help restore the planet's culture to a human form."},
        {stardate: "3192.1.", entry: "The Enterprise is en route to star cluster NGC 321. Objective - open diplomatic relations with the civilizations known to be there. We have sent a message to Eminiar VII, principle planet of the star cluster, informing them of our friendly intentions. We are awaiting an answer."},
        {stardate: "3192.5.", entry: "Now in standard orbit around planet Eminiar VII. My orders are clear. We must establish diplomatic relations at all cost. Preparing to beam down to planet surface."},
        {stardate: "3192.5.", entry: "The Enterprise, in orbit about Eminiar 7, has been declared a casualty of an incredible war fought by computers. I and my landing party, though apparently not included as casualties aboard the Enterprise, are confined on the planet's surface awaiting... what?"},
        {stardate: "3141.9.", entry: "A full hour has elapsed since interception of the strange vessel. Our presence alongside is still being completely ignored. Although our sensors continue to show signs of equipment and life aboard, there's been no indication of danger to us."},
        {stardate: "3141.9.", entry: "Alongside the S.S. Botany Bay for 10 hours now. A boarding party of engineering and medical specialists are now completing their examination of the mysterious vessel. Attempts to revive other sleepers await our success or failure with the casualty already beamed over. Dr McCoy is frankly amazed at his physical and recuperative power."},
        {stardate: "3142.8.", entry: "They have my ship, discarding their own worthless vessel. Only moments of air left on the bridge now. Commendations recommended for Lieutenant Uhura, Technicians First Class Thule and Harrison... Lieutenant Spinelli... and, of course, Mr. Spock. I take full responsibility... I take full..."},
        {stardate: "3143.3.", entry: "Control of the Enterprise has been regained. I wish my next decisions were no more difficult. Khan and his people. What a waste to put them in a reorientation center. And what do I do about McGivers?"},
        {stardate: "3417.3.", entry: "We thought our mission to Omicron Ceti III would be an unhappy one. We had expected to find no survivors of the agricultural colony there. Apparently, our information was incorrect."},
        {stardate: "3417.3.", entry: "We have been ordered by Starfleet Command to evacuate the colony on Omicron III. However, the colony leader, Elias Sandoval, has refused all cooperation and will not listen to any arguments."},
        {stardate: "3417.5.", entry: "The pod plants have spread spores throughout the ship, carried by the ventilation system. Under their influence, my crew is deserting to join the Omicron colony and I can't stop them. I don't know why I have not been infected, nor can I get Dr McCoy to explain the physical-psychological aspects of the infection."},
        {stardate: "3417.7.", entry: "Except for myself, all crew personnel have transported to the surface of the planet. Mutinied. Lieutenant Uhura has effectively sabotaged the communications station. I can only contact the surface of the planet. The ship can be maintained in orbit for several months, but even with automatic controls, I cannot pilot her alone. In effect, I am marooned here. I'm beginning to realize... just how big this ship really is. How quiet. I don't know how to get my crew back, how to counteract the effect of the spores. I don't know what I can offer against... paradise."},
        {stardate: "3417.7.", entry: "I think I've discovered the answer. But to carry out my plan entails considerable risk. Mr Spock is much stronger than the ordinary human being. Aroused, his great physical strength could kill. But it's a risk I'll have to take."},
        {stardate: "3196.1.", entry: "A distress call from the pergium production station on Janus VI has brought the Enterprise to that long-established colony. Mr Spock, Dr McCoy, and I have beamed down to meet with Chief Engineer Vanderberg, administrative head of Janus VI."},
        {stardate: "3198.4.", entry: "We have reached Organia and established standard orbit. No signs of hostile activities in this area."},
        {stardate: "3201.7.", entry: "Mr Spock and I are trapped on the planet Organia, which is in the process of being occupied by the forces of the Klingon Empire. The Organians have provided us with native clothing in the hopes that we may be taken for Organians."},
        {stardate: "3201.7.", entry: "Two drops of cordrazine can save a man's life. A hundred times that amount has just accidentally been pumped into Dr McCoy's body. In a strange, wild frenzy, he has fled the ship's bridge. All connecting decks have been placed on alert. We have no way of knowing if the madness is permanent or temporary, or in what direction it will drive McCoy."},
        {stardate: "0000.0.", entry: "For us, time does not exist. McCoy, back somewhere in the past, has effected a change in the course of time. All Earth history has been changed. There is no starship Enterprise. We have only one chance. We have asked the Guardian to show us Earth's history again. Spock and I will go back into time ourselves, and attempt to set right whatever it was that McCoy changed."},
        {stardate: "3287.2.", entry: "The mass insanity we have tracked across this section of the galaxy seems to have already touched Deneva. That planet, colonized over a century ago, is one of the most beautiful in the galaxy."},
        {stardate: "3287.2.", entry: "Whatever the creatures are, they have apparently taken over all the inhabitants of Deneva. Meanwhile, ship's surgeon Dr McCoy is examining a strange puncture wound left by one of the creatures on Mr Spock's back."},
        {stardate: "3289.8.", entry: "I am faced with the most difficult decision of my life. Unless we find a way to destroy the creatures without killing their human hosts, my command responsibilities will force me to kill over a million people."},
        {stardate: "3018.2.", entry: "Crewman Jackson is dead ... and there are no apparent physical causes. Mr. Scott and Mr. Sulu are still out of touch on the planet below. Leaving Assistant Chief Engineer DeSalle in command of the Enterprise, I'm beaming down to the planet's surface to find my two missing crewmen ... and discover what killed Jackson."},
        {stardate: "3497.2.", entry: "Planet Capella lV. The rare mineral, topaline, vital to the life-support systems of planetoid colonies, has been discovered in abundance here. Our mission - obtain a mining agreement. But we've discovered a Klingon agent has preceded us to the planet. A discovery which has cost the life of one of my crewmen."},
        {stardate: "3498.9.", entry: "Lieutenant Commander Scott in temporary command. We were forced to leave Capella to come to the aid of a Federation vessel under attack by a Klingon vessel. We were unable to contact our landing party before we were forced to answer the distress signal. Our inability to reach the landing party is strange. And ... I am concerned."},
        {stardate: "3499.1.", entry: "Before leaving the Capellan encampment, we managed to retrieve our communicators. Our phasers were not to be found. We've fled into the hills, yet we know the Capellans will eventually find us. By scent alone, if necessary. And we've learned one thing more. The girl, Eleen, hates the unborn child she is carrying."},
        {stardate: "3468.1.", entry: "While approaching Pollux IV, a planet in the Beta Geminorum system, the Enterprise has been stopped in space by an unknown force of some kind."},
        {stardate: "3372.7", entry: "On course, on schedule, bound for Altair VI via Vulcan. First Officer Spock seems to be under stress. He has requested and been granted shore leave. Ship surgeon McCoy has him under medical surveillance."},
        {stardate: "4202.1.", entry: "(Log entry made by Commodore Matt Decker of the USS Constellation) Exceptionally heavy subspace interference still prevents our contacting Starfleet to inform them of the destroyed solar systems we have encountered. We are now entering system L-374. Science Officer Masada reports the fourth planet seems to be breaking up. We are going to investigate."},
        {stardate: "3614.9.", entry: "Planet Argelius II. While on therapeutic shore leave, Mr. Scott has fallen under suspicion of having brutally murdered an Argelian woman. The chief city administrator, a Mr. Hengist, has taken charge of the investigation, but has learned little of value."},
        {stardate: "3615.4.", entry: "With Mr. Scott in a technical state of arrest, we have beamed aboard the Enterprise to continue the investigation."},
        {stardate: "3541.9.", entry: "The presence of Nomad aboard my ship has become nightmarish. Now, it apparently means to return to Earth. Once there, it would automatically destroy all life."},
        {stardate: "3715.3.", entry: "While making a routine exploration of the unexplored Gamma Trianguli VI, one of my men has been killed by a poisonous plant."},
        {stardate: "3715.3.", entry: "Our investigation of Gamma Trianguli VI has suddenly turned into a nightmare. We're being watched and followed, Mr. Spock has been injured, and now we find we are unable to return to the ship."},
        {stardate: "3715.6.", entry: "We have been introduced to Vaal, evidently the source of the planet's power emanations, possibly the force that threatens both us, and our ship."},
        {stardate: "unknown.", entry: "During an ion storm, my landing party has beamed back to the Enterprise and found it, and the personnel aboard, changed. The ship is subtly altered, physically. Behavior and discipline has become brutal, savage."},
        {stardate: "unknown", entry: "I command an Enterprise where officers apparently employ private henchmen among the crew, where assassination of superiors is a common means of advancing in rank."},
        {stardate: "unknown.", entry: "We are trapped in a savage, parallel universe from which we must escape within four hours, or I will face a death sentence at Mr. Spock's hands."},
        {stardate: "3478.2.", entry: "On a routine mission to resupply the experimental colony at Gamma Hydra IV, we discovered a most unusual phenomenon. Of the six members of the colony, none of whom were over 30, we found four had died and two were dying ... of old age."},
        {stardate: "3579.4.", entry: "The Enterprise personnel who beamed down to the planet's surface - Dr. McCoy, Engineer Scott, Mr. Spock, Lieutenant Galway, and myself - are all showing definite signs of ageing. Only Ensign Chekov appears to be normal."},
        {stardate: "4513.3.", entry: "After having been taken over by an android, the Enterprise has been underway at warp 7 for four days. Now, we are entering orbit around a planet which has never been charted."},
        {stardate: "4523.3.", entry: "Deep Space Station K-7 has issued a Priority One call. More than an emergency, it signals near or total disaster. We can only assume the Klingons have attacked the station. We're going in armed for battle."},
        {stardate: "4524.2.", entry: "A Klingon warship is hovering only 100 kilometers from Deep Space Station K-7 while its captain waits in the station manager's office. Their intentions are unknown."},
        {stardate: "4525.6.", entry: "A small disturbance between the Klingon crew and members of the Enterprise crew has broken out aboard Space Station K-7. I am forced to cancel shore leave for both ships."},
        {stardate: "4040.7.", entry: "On the surface of planet IV, system 892, the landing party has won the confidence of what obviously is a group of runaway slaves. They dwell in caves not far from a large city, wear rags, live under primitive conditions. But they are creatures of a heavily industrialized 20th-Century-type planet very much like Earth, an amazing example of Hodgkin's Law of Parallel Planet Development. But on this Earth, Rome never fell. A world ruled by emperors who can trace their line back 2,000 years, to their own Julius and Augustus Caesars."},
        {stardate: "4040.9.", entry: "Uniformed police like those of Earth, a great city like Rome with automobiles. Astonishing similarities to 20th Century Earth, down to the fine carbon steel in the bars."},
        {stardate: "4041.7.", entry: "Note commendation, Engineering Officer Scott. Despite enormous temptation and strong personal feelings, he obeyed the Prime Directive. His temporary blackout of the city below resulted in no interference with the society and yet saved the lives of myself and the landing party."},
        {stardate: "3842.3.", entry: "We have departed Vulcan for the neutral planetoid code-named Babel. Since it is in our sector, the Enterprise has been assigned to transport ambassadors of Federation planets to this vitally important council. The issues of the council are politically complex, the passengers ... explosive."},
        {stardate: "3842.4.", entry: "The interplanetary conference will consider the petition of the Coridan planets to be admitted to the Federation. The Coridan system has been claimed by some of the races now aboard our ship as delegates, races who have strong personal reasons for keeping Coridan out of the Federation. The most pressing problem aboard the Enterprise is to make sure that open warfare does not break out among the delegates, before the conference begins."},
        {stardate: "3843.4.", entry: "First Officer Spock in temporary command. The captain has been critically wounded by one of the delegates to the Babel conference. The ship is on alert status. We are still being followed by the intruder vessel."},
        {stardate: "4211.4.", entry: "Keeping our presence here secret ... is an enormous tactical advantage. Therefore, I cannot risk contact with Starfleet Command. I must take action on my own judgment. I've elected to violate orders ... and make contact with planet inhabitants here."},
        {stardate: "3211.7.", entry: "We are entering standard orbit about Gamma II, an uninhabited planetoid with an automatic communications and astrogation station. Ensign Chekov, Lieutenant Uhura, and I will beam down and make a routine check of its facilities."},
        {stardate: "3211.8.", entry: "While beaming down from the Enterprise to inspect facilities on Gamma II, the normal transporter sequence has been interrupted, and we find ourselves on a strange and hostile planet, surrounded by creatures belonging to races scattered all through the galaxy."},
        {stardate: "3259.2.", entry: "First Officer Spock in command. The captain, Lieutenant Uhura, and Ensign Chekov have been missing for nearly two hours. Computer probability projections are useless due to insufficient data."},
        {stardate: "3259.2.", entry: "Stardate ... unknown. Our strange captivity continues. This planet is called Triskelion. We do not know its location. We do not know who controls it. Its dangers ... are abundantly clear."},
        {stardate: "3619.2.", entry: "With the mysterious death of two crewmen, all personnel on the planet have been evacuated back to the ship."},
        {stardate: "3619.6.", entry: "One of the men in critical condition, the other is dead. And I ... I am now even more convinced that this is not only an intelligent creature, but the same which decimated the crew of the USS Farragut eleven years ago in another part of the galaxy. Both Spock and McCoy are doubtful of this, and I sense they also doubt my decision to stay and fight the thing. Why am I keeping the ship here?"},
        {stardate: "4307.1.", entry: "Approaching Starbase 6 for a much needed period of rest and recreation. The crew has performed excellently, but is exhausted. And I, too, am looking forward to a nice period of rest on some lovely ... planet."},
        {stardate: "4308.8.", entry: "It is now 10 minutes since we entered the zone of darkness. We have stopped engines while we seek a defence against the energy drain which seems to pervade the zone."},
        {stardate: "4309.4.", entry: "We have determined we can destroy the creature, provided we can do it from inside the organism. Spock clearly knew how to destroy it, but was unable to transmit that information."},
        {stardate: "4657.5.", entry: "Work is proceeding on the Enterprise as my crew is forced to make the required changes in the ship for intergalactic travel. I can't forget the picture of Yeoman Thompson, crushed to a handful of dust."},
        {stardate: "4658.9.", entry: "With the Enterprise under control of the Kelvans, we are approaching the energy barrier at the edge of our galaxy. Spock and Scotty have devised a suicide plan to stop the Kelvans. They have rigged the ship to explode on my signal."},
        {stardate: "4768.3.", entry: "The Enterprise is in orbit above a planet whose surface, our sensors tell us, is devoid of all life, a world destroyed and dead for at least a half a million years, yet from it comes a voice, the energy of pure thought, telling us something has survived here for those thousands of centuries. Since exploration and contact with alien intelligence is our primary mission, I've decided to risk the potential dangers and resume contact. Log entry out."},
        {stardate: "4729.4.", entry: "The M-5 computer has been installed onboard ship, and we have left the space station for test manoeuvres."},
        {stardate: "4731.3.", entry: "The M-5 multitronic unit has taken over total control of the Enterprise."},
        {stardate: "4765.1.", entry: " Aboard the USS Exeter, commanded by Ron Tracey, one of the most experienced captains in the Starfleet. What could have happened to him, and the over 400 men and women who were on this ship?"},
        {stardate: "4765.9.", entry: "The Enterprise has left the Exeter and has moved into close planet orbit. Although it appears the infection may strand us here the rest of our lives, I face an even more difficult problem - a growing belief that Captain Tracey has been interfering with the evolution of life on this planet. It seems impossible. A star captain's most solemn oath is that he will give his life, even his entire crew, rather than violate the Prime Directive."},
        {stardate: "4765.9.", entry: "Using the light-speed breakaway factor, the Enterprise has moved back through time to the 20th Century. We are now in extended orbit around Earth, using our ship's deflector shields to remain unobserved. Our mission - historical research. We are monitoring Earth communications to find out how our planet survived desperate problems in the year ... 1968."},
        {stardate: "4765.9.", entry: "A man in a 20th Century business suit - what is he? Not even Spock's Vulcan neck pinch could stop him. Without our phasers, he would have overpowered all five of us. I find it difficult to believe the mysterious Mr. Seven can be human. And yet, suppose he is?"},
        {stardate: "4765.9.", entry: "Spock and I in custody. Even if we'd talk, they wouldn't believe us. We're powerless to stop Mr. Seven or prevent the launch, or even be certain if we should. I have never felt so helpless."},
        {stardate: "4385.3.", entry: "We have transported down to the Melkotian planet and have encountered conditions which are completely contrary to what we were prepared for."},
        {stardate: "4372.5.", entry: "On a top-secret diplomatic mission, the Enterprise has entered the Tellun star system. Maintaining communications blackout, we have taken aboard Petri, ambassador from Troyius, the outer planet, and are now approaching the inner planet, Elas."},
        {stardate: "4842.6.", entry: "First Officer Spock commanding. Numerous search parties and repeated sensor probes of the area have failed to locate Captain Kirk. These last few weeks, my love for Miramanee grows with each passing day. However, the dreams return every night. Fragments of memories . . . I can almost get hold of them, and then . . ."},
        {stardate: "4843.6.", entry: "First Officer Spock commanding. We've been en route to the asteroid for several hours. Our delay on the planet's surface has made it imperative that we proceed at maximum warp speed for a period which exceeds the recommended safety margin."},
        {stardate: "5027.4.", entry: "Commander Scott has less than 15 minutes to install the Romulan's cloaking device, and get it working. I hope Mr. Spock can buy us the time we need."},
        {stardate: "5029.5.", entry: "Responding to a distress call from our scientific colony on Triacus, we are beaming down to investigate."},
        {stardate: "5029.5.", entry: "We have buried the members of the Starnes exploration party. Everyone has been deeply affected by what has happened here, with some important exceptions."},
        {stardate: "5431.4.", entry: "For 15 hours and 20 minutes, we have been following the ion trail of the spaceship that has Spock's brain. Time left to us - eight hours and 40 minutes."},
        {stardate: "4351.5.", entry: "We are beaming down to a primitive glaciated planet in the Sigma Draconis star system. Time left to us to find Spock's brain - eight hours and 29 minutes."},
        {stardate: "5431.6.", entry: "Immediately after making contact with Spock's brain, Dr. McCoy, Engineer Scott and myself were taken prisoner inside a highly complex civilisation hundreds of meters below the surface of planet Sigma Draconis VII. The primitive creature we encountered above warned us about the givers of pain and delight and the frightening consequences of being captured by them."},
        {stardate: "5432.3.", entry: "Dr. McCoy is proceeding to restore Spock's brain. Our problem - we do not know how long his increased surgical knowledge will stay with him. Any additional attempt to use the teaching device is impossible. It would kill my medical officer."},
        {stardate: "5432.3.", entry: "Our race against time to save Spock's life may have been futile. Dr. McCoy has lost the surgical knowledge he obtained from the Teacher. He has been drawing on his own skills and surgical techniques in an attempt to continue the operation. But he is faltering and uncertain. In a desperate hope that he can draw on Spock's brain for assistance, I instructed Dr. McCoy to give priority to connecting Spock's vocal chords."},
        {stardate: "5630.7.", entry: "We have been assigned to convey the Medusans' ambassador to the Federation back to their home planet. While the thoughts of the Medusans are the most sublime in the galaxy, their physical appearance is exactly the opposite. They have evolved into a race of beings who are formless, so utterly hideous that the sight of a Medusan brings total madness to any human who sees one."},
        {stardate: "5630.8.", entry: "As a result of Larry Marvick's insane fears, the Enterprise lies derelict in uncharted space. We have no way to determine our position in relation to the galaxy. We are in a completely unknown void."},
        {stardate: "5630.8.", entry: "Our one chance to return to our own galaxy is dependant upon the navigational skills of the Medusan ambassador. With that end in view, Kollos has been brought to the bridge and placed behind a protective shield."},
        {stardate: "5121.5.", entry: "Orbiting the second planet in the Minarian star system. This star has long given evidence of entering a nova phase and six months ago, a research station was established to make close-up studies of the star as its end approaches. Minara is now entering a critical period, and the Enterprise has been ordered to evacuate the station before the planet becomes uninhabitable. Yet our attempts to contact the station's personnel have been, so far, unsuccessful."},
        {stardate: "5693.2.", entry: "The Enterprise is approaching the last reported position of the starship Defiant, which vanished without trace three weeks ago. We are in unsurveyed territory."},
        {stardate: "5476.3.", entry: "I have just had the sad duty of informing Starfleet about Dr. McCoy's condition and have requested an immediate replacement."},
        {stardate: "5476.4.", entry: "We are on a parallel course with Yonada. It is still on a collision course with Daran V. Our failure to correct its course, and the critical nature of Dr. McCoy's illness, made the extraordinary event of contact with Starfleet Command imperative."},
        {stardate: "Armageddon.", entry: "We must find a way to defeat the alien force of hate that has taken over the Enterprise, stop the war now, or spend eternity in futile, bloody violence."},
        {stardate: "5784.2.", entry: "We are responding to desperate distress calls from an unknown planet. My science officer, Mr. Spock, is unable to account for this, since he reported no signs of life on the planet. It is rich in kironide deposits, a very rare and long-lasting source of great power."},
        {stardate: "5784.3.", entry: "Dr. McCoy is endeavouring to treat the leader of a strange group of people. When their planet novaed, millennia ago, they transported themselves to Earth during the time of Socrates and Plato. After the death of the Greek civilisation they idolised, they came to this planet and created for themselves a utopia patterned after it."},
        {stardate: "5710.9.", entry: "Mr. Spock has remained in accelerated time so that he might affect repairs to the ship more rapidly."},
        {stardate: "5730.2.", entry: "The planet Ariannus is vital as a transfer point on regular space commercial lanes. It has been attacked by a bacterial invasion which threatens to render it lifeless unless checked. Our mission, to decontaminate it."},
        {stardate: "5730.7.", entry: "Having completed our mission to Ariannus, the Enterprise is now on course to Starbase 4. The crew is on normal routine and we are proceeding without incident."},
        {stardate: "5730.6.", entry: "In a deliberate act of sabotage, Commissioner Bele has burned out our destruct mechanism and, through the power of his will, has again taken over directional control of the Enterprise."},
        {stardate: "5718.3.", entry: "The Enterprise is orbiting Elba 11, a planet with a poisonous atmosphere, where the Federation maintains an asylum for the few remaining incorrigible, criminally insane of the galaxy. We are bringing a revolutionary new medicine to them. A medicine with which the Federation hopes to eliminate mental illness . . . for all time. I am transporting down with Mr. Spock, and we're delivering the medicine to Dr. Donald Cory, the governor of the colony."},
        {stardate: "5423.4.", entry: "We are orbiting the planet Gideon, which is still not a member of the United Federation of Planets. The treaty negotiations have been difficult because Gideon has consistently refused the presence of a delegation from the Federation on its soil, or any surveillance by the ship's sensors. They have finally agreed to a delegation of one. They insisted it be the captain of the Enterprise. I am, therefore, beaming down at once."},
        {stardate: "5423.4.", entry: "I am alone on the Enterprise. I have searched every area of the ship and still cannot find a trace of the crew, or an indication of how its disappearance was managed. The one thing that is obvious is that I suffered a memory lapse, during which time I bruised my arm. It is causing me some irritation."},
        {stardate: "5725.3.", entry: "The Enterprise is en route to Memory Alpha. It is a planetoid set up by the Federation solely as a central library containing the total cultural history and scientific knowledge of all planetary Federation members. With us is specialist Lieutenant Mira Romaine. She is on board to supervise the transfer of all newly designed equipment... directly from the Enterprise to Memory Alpha."},
        {stardate: "5725.6.", entry: "The storm has cleared Memory Alpha. It is heading away at incredible speed. We have been unable to make contact with the planetoid. Its silence is ominous. We are beaming down to investigate."},
        {stardate: "5818.4.", entry: "A botanical plague is devastating a planet in the quadrant of the galaxy where the Enterprise is operating at present. It threatens to destroy the vegetation on the entire planet, leaving it uninhabitable. At Federation orders, we're proceeding at top warp speed to the planet Ardana, where the only source of zenite exists. It is the one substance that can halt the plague."},
        {stardate: "5819.0.", entry: "More than eight hours have passed since the consignment of zenite disappeared and we have still found no trace of it. We received word from Merak II that the botanical plague is spreading rapidly. Delivery of the zenite is imperative within 12 hours, or all life on the planet will be annihilated."},
        {stardate: "5819.3.", entry: "First Officer Spock reporting. Captain Kirk beamed down to Stratos to attempt to win the confidence of the rebel Troglytes. Unless he has made his escape from Stratos to the mines, his life is in danger from the high advisor. The captain has not informed us of his progress. For our part, we must maintain silence. We can be of no help to him without jeopardising his life."},
        {stardate: "5832.3.", entry: "The son of the Catuallan ambassador is one of six we have beamed aboard from the stolen cruiser Aurora. We have been ordered to handle him with extreme delicacy, because the treaty negotiations now in progress between the Federation and Catualla are in a crucial phase."},
        {stardate: "5832.5.", entry: "The arrogance of Dr. Sevrin and his followers is creating an intolerable situation aboard the Enterprise. If it continues, I'll be forced to use controls which might not agree with Starfleet's suggestion that they be handled with extreme tolerance."},
        {stardate: "5832.6.", entry: "I have asked Dr. McCoy to check Starfleet medical records to verify Mr. Spock's suspicion that Dr. Sevrin is insane. In spite of Dr. Sevrin 's antipathy to us, he has promised Mr. Spock that he will order his disciples to conform to our rules and regulations."},
        {stardate: "5843.7.", entry: "The Enterprise is in the grip of a raging epidemic. Three crewmen have died and 23 others have been struck down by Rigelian fever. In order to combat the illness, Dr. McCoy needs large quantities of ryetalyn, which is the only known antidote for the fever. Our sensors have picked up sufficient quantities of pure ryetalyn on a small planet in the Omega system. We are beaming down to secure this urgently needed material."},
        {stardate: "5843.75.", entry: "Have I committed a grave error in accepting Flint's word that he would deliver the antidote to us? The precious time I have let pass may result in disaster for the Enterprise and her crew."},
        {stardate: "5843.8.", entry: "We have accomplished our mission and have the ryetalyn ready to combat the epidemic aboard the Enterprise. But we have also discovered our benefactor's secret. He has created the perfect woman. Her only flaw . . . she's not human."},
        {stardate: "5906.4.", entry: "Who or what has been beamed aboard our vessel? An alien who has changed himself into this form? An illusion? I cannot conceive it possible that Abraham Lincoln could have actually been reincarnated. And yet his kindness, his gentle wisdom, his humour, everything about him is so right."},
        {stardate: "5906.5.", entry: "Engineer Scott reporting. The Enterprise is doomed to explode in two hours if Captain Kirk is defeated by the enemy on the surface of the planet. The enormous power of the Enterprise has been neutralised and we sit here watching, unable to assist."},
        {stardate: "5943.7.", entry: "We have calculated that Beta Niobe will go nova in approximately three and a half hours. Its only satellite, Sarpeidon, is a Class-M planet, which at last report, was inhabited by a civilised humanoid species. Now, our instruments show that no intelligent life remains on the planet."},
        {stardate: "5943.9.", entry: "People of this time believe in witches, and witchcraft is what I've been accused of. Five witnesses heard McCoy's voice speak to me and thought it was an evil spirit. From what I know of witchcraft trials, I don't have much chance unless I can get to the prosecutor."},
        {stardate: "5928.5.", entry: "The Enterprise has received a distress call from a group of scientists on Camus II, who are exploring the ruins of a dead civilisation. Their situation is desperate. Two of the survivors are the expedition surgeon, Dr. Coleman, and the leader of the expedition, Dr. Janice Lester."},
        {stardate: "Unknown.", entry: "I have lost track of time. I am still held captive in a strange body and separated from all my crew."},
        {stardate: "5930.3.", entry: "The results of Dr. McCoy's examination have given me complete confidence in myself. My fears are past. I shall function freely as the captain. I am the captain, in fact."},
    ],
    "Enterprise Log" : [
        {stardate: "2715.6.", entry: "First Officer Spock, acting captain. I must now use an ancient Vulcan technique to probe into Van Gelder's tortured mind."},
        {stardate: "4041.3.", entry: "Engineer Scott reporting. All banks in readiness for disruption of power sources on the planet's surface."},
    ],
    "Personal Log" : [
        {stardate: "3013.1.", entry: "I find it hard to believe the events of the past 24 hours, or the plea of Mr Spock standing general court martial. Why? Why does Spock want to take to that forbidden world his former captain? Mutilated by a recent space disaster, now a shell of a man, unable to speak or move. The only answer Spock would give was on the hearing-room screen. How Spock could do this, he refused to explain. But there, before our eyes, actual images from 13 years ago of Captain Pike as he was when he commanded this vessel. Of Spock in those days, and of how the Enterprise had become the first and only starship to visit Talos IV. They had received a distress signal from that planet and discovered there, still alive after many years, the survivors of a missing vessel, only to find it was all an illusion. No survivors. No encampment. It was all a trap set by a race of beings who could make a man believe he was seeing anything they wished him to see. And Captain Pike was gone, a prisoner for some unknown purpose. The court martial of Mr Spock has been reconvened in closed session. Despite all we can do, images continue to be transmitted to us from Talos IV."},
        {stardate: "3013.2.", entry: "Reconvening court martial of Mr Spock. And the strangest trial evidence ever heard aboard a starship. From the mysterious planet now only one hour ahead of us, the story of Captain Pike's imprisonment there. Strange evidence from the past. How the Talosians, planning to breed a society of human slaves, tempted Captain Pike with the Earth woman they held in captivity. And as she appeared to him in many forms, each more exciting than the last, Pike was beginning to weaken."},
        {stardate: "3620.7.", entry: "Have I the right to jeopardise my crew, my ship for a feeling I can't even put into words? No man achieves Starfleet command without relying on intuition, but have I made a rational decision? Am I letting the horrors of the past distort my judgment of the present?"},
        {stardate: "4309.2.", entry: "We have established that the thing which destroyed the USS Intrepid and the Gamma 7A system is an incredibly huge but simple cellular being whose energies are totally destructive to all known life. Both Mr. Spock and Dr. McCoy have volunteered to go in a specially equipped shuttlecraft to penetrate the cell, find a way to destroy it, and free the ship. Dr. McCoy has the medical, biological knowledge. Mr. Spock ... is better suited physically and emotionally to stand the stress. Both are right, both are capable ... and which of my friends do I condemn to death?"},
        {stardate: "4309.5", entry: "Commander Spock, USS Enterprise. I have noted the passage of the Enterprise ... on its way to whatever awaits it. If this record should survive me, I wish it known That I bequeath my highest commendation and testimonial to the captain, officers, and crew of the Enterprise ... the finest starship in the fleet."},
        {stardate: "4309.6", entry: "(Log entry made by Captain James T. Kirk of the USS Enterprise) We have arrived at the chromosome body ... in the nucleus of the organism. If we should fail in our attempt to destroy it, or be unable to free ourselves, I wish to record my recommendations for the following personnel, that they receive special citation - Lieutenant Commander Leonard McCoy, Lieutenant Commander Montgomery Scott, Officers Chekov, Kyle, Uhura, and my highest commendation for Commander Spock, science officer, who gave his life in the performance of his duty."},
    ],
    "Medical Log" : [
        {stardate: "2819.4.", entry: "Lieutenant Riley sufficiently recovered to be discharged, but the captain has ordered him restricted to sickbay to prevent contact with passenger who calls himself Karidian, and who's suspected of being Kodos the Executioner, and of murdering the Lieutenant's family."},
        {stardate: "4211.8.", entry: "Kirk is right about the people here. Despite their fear and our strangeness, they're compassionate and gentle. I've learned the hunter Tyree is now their leader. He is expected to return shortly with his wife, who they say knows how to cure this poison. My problem - the captain is in deep shock. I must keep him warm and alive until then."},
        {stardate: "4769.1.", entry: "Three alien minds now inhabit the bodies of Captain Kirk, Science Officer Spock, and Dr. Ann Mulhall. As planned, the construction of android robots is underway. All is proceeding as expected ... and as promised. I can find no reason for concern, but yet I am filled with foreboding."},
        {stardate: "4770.3.", entry: "Do I list one death or two? When Kirk's body died, Sargon was too far distant from his receptacle to transfer back. Sargon is dead. But is Captain Kirk dead? His body is, but his consciousness is still in the receptacle into which it was transferred earlier."},
        {stardate: "4765.9.", entry: "(Log entry made by medical officer of the USS Exeter) If you've come aboard this ship ... you're dead men. Don't go back to your own ship. You have one chance. Get down there. Get down there fast. Captain Tracey is ..."},
        {stardate: "5027.3.", entry: "Dr. Leonard McCoy recording. I'm concerned about Captain Kirk. He shows indications of increasing tension and emotional stress. I can find no reason for the captain's behaviour, except possibly that we've been on patrol too long without relief and diversion. He has resisted all of my attempts to run a psychological profile on him."},
    ],
    "Ship's Log" : [
        {stardate: "4650.5.", entry: "Mr. Spock reporting. Incredible as it seems, Dr. McCoy and I are once again prisoners of the chief criminal boss of a society patterned after old Earth gangsters."},
        {stardate: "2124.5.", entry: "First Officer Spock reporting for Captain James Kirk. We are orbiting the lone, unrecorded planet in the star desert. For four hours, we have made every possible instrument sweep, but Captain Kirk and Helmsman Sulu remain unaccounted for. I have placed the ship on Red Alert."},
        {stardate: "3193.0.", entry: "Chief Engineer Scott recording. The captain and first officer are overdue and missing on the surface of Eminiar VII. I have taken standard precautionary measures while we continue our attempts to locate them."},
        {stardate: "3219.8.", entry: "Lieutenant Commander Scott recording in the absence of Captain Kirk. A shuttlecraft bearing the captain, the first officer, Chief Surgeon McCoy, and Assistant Federation Commissioner Hedford is now definitely overdue for a rendezvous with the Enterprise. We are attempting to backtrack it."},
        {stardate: "3220.3.", entry: "Lieutenant Commander Scott reporting in lieu of the captain and the first officer. We are continuing our search for the missing shuttlecraft."},
        {stardate: "4041.2.", entry: "Chief Engineer Scott recording. Captain Kirk and his landing party have checked in, but they have used the code term Condition Green, which means they're in trouble. But it also prohibits my taking any action."},
        {stardate: "5432.1.", entry: "Lieutenant Sulu recording. I am holding the Enterprise in orbit about planet Sigma Draconis VII. Captain Kirk's hunch that Spock's brain is on this planet appears to be correct. Ensign Chekov remains on the surface to act as liaison between the captain and the Enterprise."},
        {stardate: "5710.5.", entry: "Lieutenant Commander Scott reporting. While exploring an outer quadrant of the galaxy, the Enterprise received distress calls from an apparently uninhabited, incredibly beautiful city on the planet of Scalos. Captain Kirk and a landing party have beamed down to investigate."},
        {stardate: "5423.8.", entry: "First Officer Spock reporting. Obviously the Gideons have transported Captain Kirk onto this replica of the Enterprise to so confuse his mind as to make him susceptible to some extraordinary experiment. It is my intention to locate the captain and warn him before the experiment reaches its conclusion, which logic indicates means the end of the captain's life as he knows it."},
    ]
}

function getLogEntry(type) {
    if (type == 'any') {
        var logTypes = Object.keys(rawLogs);
        type = logTypes[Math.floor(Math.random() * logTypes.length)];
    }
    
    console.log(type);
    var logs = rawLogs[type];    
    
    var min = 0;
    var max = logs.length - 1;
    var randomNumber = Math.random() * (max - min + 1) + min;
    randomNumber = Math.floor(randomNumber);
    
    var stardate = logs[randomNumber]["stardate"];
    var entry = logs[randomNumber]["entry"];

    console.log('%s / Stardate: %s / %s', type, stardate, entry);
}

function getStardate(type) {
    var date = new Date();
    var year = Number(date.getFullYear());
    var month = Number(date.getMonth() + 1);
    var day = Number(date.getDate());
    
    switch(type) {
        case "classic":
            var baseYear = 2005;
            var starYear = 58000 + (year - baseYear) * 1000;
            var starDate = starYear + (month * 30 + day) * 2.7;
            console.log('Stardate: %s', starDate);
            break;
        default:
            var start = new Date(year,0);
            var elapsed = date - start;
            elapsed = Math.floor(elapsed / 86400000);
            elapsed = elapsed / 365;
            elapsed = elapsed.toString().substring(2,4);
            console.log("Stardate: %s.%s", year, elapsed);
            break;
    }
}

module.exports = function(robot) {
    robot.hear(/captain'?s\slog/i, function(msg) {
        msg.send(getLogEntry("Captain's Log"));
    });

    robot.hear(/enterprise\slog/i, function(msg) {
        msg.send(getLogEntry("Enterprise Log"));
    });

    robot.hear(/personal\slog/i, function(msg) {
        msg.send(getLogEntry("Personal Log"));
    });

    robot.hear(/medical\slog/i, function(msg) {
        msg.send(getLogEntry("Medical Log"));
    });

    robot.hear(/ship'?s\slog/i, function(msg) {
        msg.send(getLogEntry("Ship's Log"));
    });

    robot.hear(/shatner|kirk|star\strek/i, function(msg) {
        msg.send(getLogEntry("any"));
    });

    robot.hear(/stardate/i, function(msg) {
        msg.send(getStardate());
    });

    robot.hear(/stardate\sclassic/i, function(msg) {
        msg.send(getStardate("classic"));
    });
}


console.log(".............CAPTAIN\n");
getLogEntry("Captain's Log");
console.log(".............ENTERPRISE\n");
getLogEntry("Enterprise Log")
console.log(".............PERSONAL\n");
getLogEntry("Personal Log");
console.log(".............MEDICAL\n");
getLogEntry("Medical Log");
console.log(".............SHIP\n");
getLogEntry("Ship's Log");
console.log(".............ANY\n");
getLogEntry("any");
console.log(".............STARDARTE\n");
getStardate("classic");
