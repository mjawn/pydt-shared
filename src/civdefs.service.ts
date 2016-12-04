export class CivDef {
  public civDisplayName: string;
  public leaderDisplayName: string;

  constructor(public civKey: string, public leaderKey: string, leaderDisplayName?: string, public dlcId?: string) {
    this.civDisplayName = this.defaultDisplayName(civKey);
    this.leaderDisplayName = leaderDisplayName || this.defaultDisplayName(leaderKey);
  }

  getImageFileName() {
    return `${this.civKey.replace('CIVILIZATION_', '')}_${this.leaderKey.replace('LEADER_', '')}.png`;
  }

  getFullDisplayName() {
    return `${this.leaderDisplayName} (${this.civDisplayName})`;
  }

  private defaultDisplayName(str: string) {
    str = str.replace('CIVILIZATION_', '').replace('LEADER_', '').replace(/_/g, ' ');

    return str.replace(/\w\S*/g, txt => {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }
}

export class DLC {
  constructor(public id: string, public displayName: string) {
  }
}

export const Civ6DLCs: DLC[] = [
  new DLC('02A8BDDE-67EA-4D38-9540-26E685E3156E', 'Aztec Civilization Pack')
];

export class Civ6LeaderArray extends Array<CivDef> {
  filterByDlc(dlcIds: string[]) {
    const result = new Civ6LeaderArray();
    dlcIds = dlcIds || [];

    for (let leader of this) {
      if (!leader.dlcId || dlcIds.indexOf(leader.dlcId) >= 0) {
        result.push(leader);
      }
    }

    return result;
  }
}

export const Civ6Leaders = new Civ6LeaderArray();
Civ6Leaders.push(
  new CivDef('CIVILIZATION_FRANCE', 'LEADER_CATHERINE_DE_MEDICI'),
  new CivDef('CIVILIZATION_EGYPT', 'LEADER_CLEOPATRA'),
  new CivDef('CIVILIZATION_GERMANY', 'LEADER_BARBAROSSA', 'Frederick Barbarossa'),
  new CivDef('CIVILIZATION_INDIA', 'LEADER_GANDHI'),
  new CivDef('CIVILIZATION_SUMERIA', 'LEADER_GILGAMESH'),
  new CivDef('CIVILIZATION_GREECE', 'LEADER_GORGO'),
  new CivDef('CIVILIZATION_NORWAY', 'LEADER_HARDRADA', 'Harald Hardrada'),
  new CivDef('CIVILIZATION_JAPAN', 'LEADER_HOJO', 'Hojo Tokimune'),
  new CivDef('CIVILIZATION_AZTEC', 'LEADER_MONTEZUMA', null, '02A8BDDE-67EA-4D38-9540-26E685E3156E'),
  new CivDef('CIVILIZATION_KONGO', 'LEADER_MVEMBA', 'Mvemba a Nzinga'),
  new CivDef('CIVILIZATION_BRAZIL', 'LEADER_PEDRO', 'Pedro II'),
  new CivDef('CIVILIZATION_GREECE', 'LEADER_PERICLES'),
  new CivDef('CIVILIZATION_RUSSIA', 'LEADER_PETER_GREAT', 'Peter the Great'),
  new CivDef('CIVILIZATION_SPAIN', 'LEADER_PHILIP_II', 'Philip II'),
  new CivDef('CIVILIZATION_CHINA', 'LEADER_QIN', 'Qin Shi Huang'),
  new CivDef('CIVILIZATION_ARABIA', 'LEADER_SALADIN'),
  new CivDef('CIVILIZATION_AMERICA', 'LEADER_T_ROOSEVELT', 'Teddy Roosevelt'),
  new CivDef('CIVILIZATION_SCYTHIA', 'LEADER_TOMYRIS'),
  new CivDef('CIVILIZATION_ROME', 'LEADER_TRAJAN'),
  new CivDef('CIVILIZATION_ENGLAND', 'LEADER_VICTORIA')
);
