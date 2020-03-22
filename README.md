# XT2-Challenge-1
De challenge 2 voor het vak XT2 door Nino Jongmans.

## SpaceX klok voor het team op mars
Deze webpagina is bedoeld voor de bemanning op mars. Zo kunnen zij altijd de actuele tijd op aarde bekijken. 

Astronauten uit verschillende tijdzones? Geen probleem! Er is een functie ingebouwd die (een aantal van) de tijdzones weergeven. 

Op mars is het moeilijk om te achterhalen of het nou tijd is om te gaan slapen. Zodra je de klok afleest weet je in principe natuurlijk genoeg,
maar om dit wat te versimpele geeft de achtergrondkleur, de maan/zon en de geschreven tekst duidelijk weer wat de huidige stand is. Dit maakt het proces nog makkelijker!

Om het allemaal wat minder statisch te maken loopt de klok en beweegt de wolk op en neer.


De technieken bestaan simpel weg uit een klok die de huidige UTC tijd pakt. Met een andere functie heb ik een if, else statement laten uitvoeren die de tijdzones bepalen. Verder heb ik nog een keer een if,else statement gebruikt die de huidige uren uitleest. Aan de hand van de tijd in uren, wordt er via JS de html en css aangepast. Dit resulteert in een donkere achtergrond, maan/zon en andere teksten.

### Fout in de code
Helaas is er wel een fout in de code, die ik niet verholpen kreeg. In de een na grootste en het grootste scherm is de positie van de datum en de tijdzone verschoven. Deze staan nu naast elkaar. Op de een of andere manier, wordt de tijdzone breeder dan het seconden vak wat er boven staat. Het wordt aan de rechter kant precies zo breed als de column-gap die is toegepast (20px). Dit is mij niet gelukt om op te lossen.

Ik heb dit nu tijdelijk geprobeerd op te lossen met een max-width op het vak van de tijdzone. Deze zal echter natuurlijk nooit precies gelijk lopen met die van de seconden.