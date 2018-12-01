import ARI from '../assets/image/teamsIcon/ARI.png';
import ATL from '../assets/image/teamsIcon/ATL.png';
import BAL from '../assets/image/teamsIcon/BAL.png';
import BOS from '../assets/image/teamsIcon/BOS.png';
import CHC from '../assets/image/teamsIcon/CHC.png';
import CHW from '../assets/image/teamsIcon/CHW.png';
import CIN from '../assets/image/teamsIcon/CIN.png';
import CLE from '../assets/image/teamsIcon/CLE.png';
import COL from '../assets/image/teamsIcon/COL.png';
import DET from '../assets/image/teamsIcon/DET.png';
import HOU from '../assets/image/teamsIcon/HOU.png';
import KAN from '../assets/image/teamsIcon/KAN.png';
import LAA from '../assets/image/teamsIcon/LAA.png';
import LAD from '../assets/image/teamsIcon/LAD.png';
import MIA from '../assets/image/teamsIcon/MIA.png';
import MIL from '../assets/image/teamsIcon/MIL.png';
import MIN from '../assets/image/teamsIcon/MIN.png';
import NYM from '../assets/image/teamsIcon/NYM.png';
import NYY from '../assets/image/teamsIcon/NYY.png';
import OAK from '../assets/image/teamsIcon/OAK.png';
import PHI from '../assets/image/teamsIcon/PHI.png';
import PIT from '../assets/image/teamsIcon/PIT.png';
import SD from '../assets/image/teamsIcon/SD.png';
import SEA from '../assets/image/teamsIcon/SEA.png';
import SF from '../assets/image/teamsIcon/SF.png';
import STL from '../assets/image/teamsIcon/STL.png';
import TB from '../assets/image/teamsIcon/TB.png';
import TEX from '../assets/image/teamsIcon/TEX.png';
import TOR from '../assets/image/teamsIcon/TOR.png';
import WSN from '../assets/image/teamsIcon/WSN.png';

export function getTeamInfo(code) {
    switch (code) {
        case "ARI":
            return getTeamObj("Arizona", "Diamondbacks", ARI);
        case "ATL":
            return getTeamObj("Atlanta", "Braves", ATL);
        case "BAL":
            return getTeamObj("Baltimore", "Orioles", BAL);
        case "BOS":
            return getTeamObj("Boston", "Red Sox", BOS);
        case "CHC":
            return getTeamObj("Chicago", "Cubs", CHC);
        case "CHW":
        case "CWS":
            return getTeamObj("Chicago", "White Sox", CHW);
        case "CIN":
            return getTeamObj("Cincinnati", "Reds", CIN);
        case "CLE":
            return getTeamObj("Cleveland", "Indians", CLE);
        case "COL":
            return getTeamObj("Colorado", "Rockies", COL);
        case "DET":
            return getTeamObj("Detroit", "Tigers", DET);
        case "HOU":
            return getTeamObj("Houston", "Astros", HOU);
        case "KAN":
        case "KC":
            return getTeamObj("Kansas City", "Royals", KAN);
        case "LAA":
            return getTeamObj("Los Angeles", "Angels", LAA);
        case "LAD":
            return getTeamObj("Los Angeles", "Dodgers", LAD);
        case "MIA":
            return getTeamObj("Miami", "Marlins", MIA);
        case "MIL":
            return getTeamObj("Milwaukee", "Brewers", MIL);
        case "MIN":
            return getTeamObj("Minnesota", "Twins", MIN);
        case "NYM":
            return getTeamObj("New York", "Mets", NYM);
        case "NYY":
            return getTeamObj("New York", "Yankees", NYY);
        case "OAK":
            return getTeamObj("Oakland", "Athletics", OAK);
        case "PHI":
            return getTeamObj("Philadelphia", "Phillies", PHI);
        case "PIT":
            return getTeamObj("Pittsburgh", "Pirates", PIT);
        case "SD":
            return getTeamObj("San Diego", "Padres", SD);
        case "SEA":
            return getTeamObj("Seattle", "Mariners", SEA);
        case "SF":
            return getTeamObj("San Francisco", "Giants", SF);
        case "STL":
            return getTeamObj("St. Louis", "Cardinals", STL);
        case "TB":
            return getTeamObj("Tampa Bay", "Rays", TB);
        case "TEX":
            return getTeamObj("Texas", "Rangers", TEX);
        case "TOR":
            return getTeamObj("Toronto", "Blue Jays", TOR);
        case "WSN":
        case "WAS":
            return getTeamObj("Washington", "Nationals", WSN);
    }
}

function getTeamObj(city, name, img) {
    return { "city": city, "name": name, "imgSrc": img}
}