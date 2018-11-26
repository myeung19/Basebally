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

export function getTeamName(code) {
    switch (code) {
        case "ARI":
            return "Arizona Diamondbacks";
        case "ATL":
            return "Atlanta Braves";
        case "BAL":
            return "Baltimore Orioles";
        case "BOS":
            return "Boston Red Sox";
        case "CHC":
            return "Chicago Cubs";
        case "CHW":
        case "CWS":
            return "Chicago White Sox";
        case "CIN":
            return "Cincinnati Reds";
        case "CLE":
            return "Cleveland Indians";
        case "COL":
            return "Colorado Rockies";
        case "DET":
            return "Detroit Tigers";
        case "HOU":
            return "Houston Astros";
        case "KAN":
            return "Kansas City Royals";
        case "LAA":
            return "Los Angeles Angels";
        case "LAD":
            return "Los Angeles Dodgers";
        case "MIA":
            return "Miami Marlins";
        case "MIL":
            return "Milwaukee Brewers";
        case "MIN":
            return "Minnesota Twins";
        case "NYM":
            return "New York Mets";
        case "NYY":
            return "New York Yankees";
        case "OAK":
            return "Oakland Athletics";
        case "PHI":
            return "Philadelphia Phillies";
        case "PIT":
            return "Pittsburgh Pirates";
        case "SD":
            return "San Diego Padres";
        case "SEA":
            return "Seattle Mariners";
        case "SF":
            return "San Francisco Giants";
        case "STL":
            return "St. Louis Cardinals";
        case "TB":
            return "Tampa Bay Rays";
        case "TEX":
            return "Texas Rangers";
        case "TOR":
            return "Toronto Blue Jays";
        case "WSN":
        case "WAS":
            return "Washington Nationals";
    }
};

export function getTeamIcon(code) {
    switch (code) {
        case "ARI":
            return ARI;
        case "ATL":
            return ATL;
        case "BAL":
            return BAL;
        case "BOS":
            return BOS;
        case "CHC":
            return CHC;
        case "CHW":
            return CHW;
        case "CIN":
            return CIN;
        case "CLE":
            return CLE;
        case "COL":
            return COL;
        case "DET":
            return DET;
        case "HOU":
            return HOU;
        case "KAN":
            return KAN;
        case "LAA":
            return LAA;
        case "LAD":
            return LAD;
        case "MIA":
            return MIA;
        case "MIL":
            return MIL;
        case "MIN":
            return MIN;
        case "NYM":
            return NYM;
        case "NYY":
            return NYY;
        case "OAK":
            return OAK;
        case "PHI":
            return PHI;
        case "PIT":
            return PIT;
        case "SD":
            return SD;
        case "SEA":
            return SEA;
        case "SF":
            return SF;
        case "STL":
            return STL;
        case "TB":
            return TB;
        case "TEX":
            return TEX;
        case "TOR":
            return TOR;
        case "WSN":
            return WSN;
    }
};