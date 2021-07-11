import SQLite from 'react-native-sqlite-2';

const db = SQLite.openDatabase('test.db', '1.0', '', 1);
db.transaction(function (txn) {
  txn.executeSql(
    'CREATE TABLE IF NOT EXISTS CID(time_id DOUBLE PRIMARY KEY NOT NULL, lat DOUBLE NOT NULL, long DOUBLE NOT NULL, value DOUBLE NOT NULL)',
    [],
  );
  txn.executeSql(
    'CREATE TABLE IF NOT EXISTS EARFCN(time_id DOUBLE PRIMARY KEY NOT NULL, lat DOUBLE NOT NULL, long DOUBLE NOT NULL, value DOUBLE NOT NULL)',
    [],
  );
  txn.executeSql(
    'CREATE TABLE IF NOT EXISTS PLMN(time_id DOUBLE PRIMARY KEY NOT NULL, lat DOUBLE NOT NULL, long DOUBLE NOT NULL, value DOUBLE NOT NULL)',
    [],
  );
  txn.executeSql(
    'CREATE TABLE IF NOT EXISTS TAC(time_id DOUBLE PRIMARY KEY NOT NULL, lat DOUBLE NOT NULL, long DOUBLE NOT NULL, value DOUBLE NOT NULL)',
    [],
  );
  txn.executeSql(
    'CREATE TABLE IF NOT EXISTS LAC(time_id DOUBLE PRIMARY KEY NOT NULL, lat DOUBLE NOT NULL, long DOUBLE NOT NULL, value DOUBLE NOT NULL)',
    [],
  );
  txn.executeSql(
    'CREATE TABLE IF NOT EXISTS NETWORK(time_id DOUBLE PRIMARY KEY NOT NULL, lat DOUBLE NOT NULL, long DOUBLE NOT NULL, value DOUBLE NOT NULL)',
    [],
  );

  txn.executeSql(
    'CREATE TABLE IF NOT EXISTS MCC(time_id DOUBLE PRIMARY KEY NOT NULL, lat DOUBLE NOT NULL, long DOUBLE NOT NULL, value DOUBLE NOT NULL)',
    [],
  );
  txn.executeSql(
    'CREATE TABLE IF NOT EXISTS MNC(time_id DOUBLE PRIMARY KEY NOT NULL, lat DOUBLE NOT NULL, long DOUBLE NOT NULL, value DOUBLE NOT NULL)',
    [],
  );
  txn.executeSql(
    'CREATE TABLE IF NOT EXISTS UPLINK(time_id DOUBLE PRIMARY KEY NOT NULL, lat DOUBLE NOT NULL, long DOUBLE NOT NULL, value DOUBLE NOT NULL)',
    [],
  );
  txn.executeSql(
    'CREATE TABLE IF NOT EXISTS DOWNLINK(time_id DOUBLE PRIMARY KEY NOT NULL, lat DOUBLE NOT NULL, long DOUBLE NOT NULL, value DOUBLE NOT NULL)',
    [],
  );
  txn.executeSql(
    'CREATE TABLE IF NOT EXISTS RSRP(time_id DOUBLE PRIMARY KEY NOT NULL, lat DOUBLE NOT NULL, long DOUBLE NOT NULL, value DOUBLE NOT NULL)',
    [],
  );
  txn.executeSql(
    'CREATE TABLE IF NOT EXISTS RSRQ(time_id DOUBLE PRIMARY KEY NOT NULL, lat DOUBLE NOT NULL, long DOUBLE NOT NULL, value DOUBLE NOT NULL)',
    [],
  );
  txn.executeSql(
    'CREATE TABLE IF NOT EXISTS RSSI(time_id DOUBLE PRIMARY KEY NOT NULL, lat DOUBLE NOT NULL, long DOUBLE NOT NULL, value DOUBLE NOT NULL)',
    [],
  );
});

export function removeAllData() {
  db.transaction(function (txn) {
    txn.executeSql('DELETE FROM CID', []);
    txn.executeSql('DELETE FROM EARFCN', []);
    txn.executeSql('DELETE FROM PLMN', []);
    txn.executeSql('DELETE FROM TAC', []);
    txn.executeSql('DELETE FROM LAC', []);
    txn.executeSql('DELETE FROM NETWORK', []);
  });
}

// -------------------------------------------------------------------------------
// CID ---------------------------------------------------------------------------
// -------------------------------------------------------------------------------
export function setCID(id, lat, long, value) {
  db.transaction(function (txn) {
    txn.executeSql(
      'INSERT INTO CID (time_id, lat, long, value) VALUES (?, ?, ?, ?)',
      [id, lat, long, value],
      e => {
        console.log(e);
      },
      e => {
        console.warn('error', e);
      },
    );
  });
}

export function getAllCID(onSuccess) {
  db.transaction(function (txn) {
    txn.executeSql('SELECT * FROM `CID`', [], function (tx, res) {
      const result = [];
      for (let i = 0; i < res.rows.length; ++i) {
        result.push(res.rows.item(i));
      }
      onSuccess(result);
    });
  });
}

export function getCIDById(id, onSuccess) {
  db.transaction(function (txn) {
    txn.executeSql(
      'SELECT * FROM `CID` WHERE time_id = (?)',
      [id],
      function (tx, res) {
        if (res.rows.length) onSuccess(res.rows.item(0));
      },
    );
  });
}
// -------------------------------------------------------------------------------
// EARFCN ------------------------------------------------------------------------
// -------------------------------------------------------------------------------
export function setEARFCN(id, lat, long, value) {
  db.transaction(function (txn) {
    txn.executeSql(
      'INSERT INTO EARFCN (time_id, lat, long, value) VALUES (?, ?, ?, ?)',
      [id, lat, long, value],
      e => {
        console.log(e);
      },
      e => {
        console.warn('error', e);
      },
    );
  });
}

export function getAllEARFCN(onSuccess) {
  db.transaction(function (txn) {
    txn.executeSql('SELECT * FROM `EARFCN`', [], function (tx, res) {
      const result = [];
      for (let i = 0; i < res.rows.length; ++i) {
        result.push(res.rows.item(i));
      }
      onSuccess(result);
    });
  });
}

export function getEARFCNById(id, onSuccess) {
  db.transaction(function (txn) {
    txn.executeSql(
      'SELECT * FROM `EARFCN` WHERE time_id = ?',
      [id],
      function (tx, res) {
        if (res.rows.length) onSuccess(res.rows.item(0));
      },
    );
  });
}
// -------------------------------------------------------------------------------
// PLMN --------------------------------------------------------------------------
// -------------------------------------------------------------------------------
export function setPLMN(id, lat, long, value) {
  db.transaction(function (txn) {
    txn.executeSql(
      'INSERT INTO PLMN (time_id, lat, long, value) VALUES (?, ?, ?, ?)',
      [id, lat, long, value],
      e => {
        console.log(e);
      },
      e => {
        console.warn('error', e);
      },
    );
  });
}

export function getAllPLMN(onSuccess) {
  db.transaction(function (txn) {
    txn.executeSql('SELECT * FROM `PLMN`', [], function (tx, res) {
      const result = [];
      for (let i = 0; i < res.rows.length; ++i) {
        result.push(res.rows.item(i));
      }
      onSuccess(result);
    });
  });
}

export function getPLMNById(id, onSuccess) {
  db.transaction(function (txn) {
    txn.executeSql(
      'SELECT * FROM `PLMN` WHERE time_id = ?',
      [id],
      function (tx, res) {
        if (res.rows.length) onSuccess(res.rows.item(0));
      },
    );
  });
}
// -------------------------------------------------------------------------------
// TAC ---------------------------------------------------------------------------
// -------------------------------------------------------------------------------
export function setTAC(id, lat, long, value) {
  db.transaction(function (txn) {
    txn.executeSql(
      'INSERT INTO TAC (time_id, lat, long, value) VALUES (?, ?, ?, ?)',
      [id, lat, long, value],
      e => {
        console.log(e);
      },
      e => {
        console.warn('error', e);
      },
    );
  });
}

export function getAllTAC(onSuccess) {
  db.transaction(function (txn) {
    txn.executeSql('SELECT * FROM `TAC`', [], function (tx, res) {
      const result = [];
      for (let i = 0; i < res.rows.length; ++i) {
        result.push(res.rows.item(i));
      }
      onSuccess(result);
    });
  });
}

export function getTACById(id, onSuccess) {
  db.transaction(function (txn) {
    txn.executeSql(
      'SELECT * FROM `TAC` WHERE time_id = ?',
      [id],
      function (tx, res) {
        if (res.rows.length) onSuccess(res.rows.item(0));
      },
    );
  });
}

// -------------------------------------------------------------------------------
// LAC ---------------------------------------------------------------------------
// -------------------------------------------------------------------------------
export function setLAC(id, lat, long, value) {
  db.transaction(function (txn) {
    txn.executeSql(
      'INSERT INTO LAC (time_id, lat, long, value) VALUES (?, ?, ?, ?)',
      [id, lat, long, value],
      e => {
        console.log(e);
      },
      e => {
        console.warn('error', e);
      },
    );
  });
}

export function getAllLAC(onSuccess) {
  db.transaction(function (txn) {
    txn.executeSql('SELECT * FROM `LAC`', [], function (tx, res) {
      const result = [];
      for (let i = 0; i < res.rows.length; ++i) {
        result.push(res.rows.item(i));
      }
      onSuccess(result);
    });
  });
}

export function getLACById(id, onSuccess) {
  db.transaction(function (txn) {
    txn.executeSql(
      'SELECT * FROM `LAC` WHERE time_id = ?',
      [id],
      function (tx, res) {
        if (res.rows.length) onSuccess(res.rows.item(0));
      },
    );
  });
}

// -------------------------------------------------------------------------------
// NETWORK -----------------------------------------------------------------------
// -------------------------------------------------------------------------------
export function setNETWORK(id, lat, long, value) {
  db.transaction(function (txn) {
    txn.executeSql(
      'INSERT INTO NETWORK (time_id, lat, long, value) VALUES (?, ?, ?, ?)',
      [id, lat, long, value],
      e => {
        console.log(e);
      },
      e => {
        console.warn('error', e);
      },
    );
  });
}

export function getAllNETWORK(onSuccess) {
  db.transaction(function (txn) {
    txn.executeSql('SELECT * FROM `NETWORK`', [], function (tx, res) {
      const result = [];
      for (let i = 0; i < res.rows.length; ++i) {
        result.push(res.rows.item(i));
      }
      onSuccess(result);
    });
  });
}

export function getNETWORKById(id, onSuccess) {
  db.transaction(function (txn) {
    txn.executeSql(
      'SELECT * FROM `NETWORK` WHERE time_id = ?',
      [id],
      function (tx, res) {
        if (res.rows.length) onSuccess(res.rows.item(0));
      },
    );
  });
}
// -------------------------------------------------------------------------------
// MCC ---------------------------------------------------------------------------
// -------------------------------------------------------------------------------
export function setMCC(id, lat, long, value) {
  db.transaction(function (txn) {
    txn.executeSql(
      'INSERT INTO MCC (time_id, lat, long, value) VALUES (?, ?, ?, ?)',
      [id, lat, long, value],
      e => {
        console.log(e);
      },
      e => {
        console.warn('error', e);
      },
    );
  });
}

export function getAllMCC(onSuccess) {
  db.transaction(function (txn) {
    txn.executeSql('SELECT * FROM `MCC`', [], function (tx, res) {
      const result = [];
      for (let i = 0; i < res.rows.length; ++i) {
        result.push(res.rows.item(i));
      }
      onSuccess(result);
    });
  });
}

export function getMCCById(id, onSuccess) {
  db.transaction(function (txn) {
    txn.executeSql(
      'SELECT * FROM `MCC` WHERE time_id = (?)',
      [id],
      function (tx, res) {
        if (res.rows.length) onSuccess(res.rows.item(0));
      },
    );
  });
}

// -------------------------------------------------------------------------------
// MNC ---------------------------------------------------------------------------
// -------------------------------------------------------------------------------
export function setMNC(id, lat, long, value) {
  db.transaction(function (txn) {
    txn.executeSql(
      'INSERT INTO MNC (time_id, lat, long, value) VALUES (?, ?, ?, ?)',
      [id, lat, long, value],
      e => {
        console.log(e);
      },
      e => {
        console.warn('error', e);
      },
    );
  });
}

export function getAllMNC(onSuccess) {
  db.transaction(function (txn) {
    txn.executeSql('SELECT * FROM `MNC`', [], function (tx, res) {
      const result = [];
      for (let i = 0; i < res.rows.length; ++i) {
        result.push(res.rows.item(i));
      }
      onSuccess(result);
    });
  });
}

export function getMNCById(id, onSuccess) {
  db.transaction(function (txn) {
    txn.executeSql(
      'SELECT * FROM `MNC` WHERE time_id = (?)',
      [id],
      function (tx, res) {
        if (res.rows.length) onSuccess(res.rows.item(0));
      },
    );
  });
}

// -------------------------------------------------------------------------------
// UPLINK ------------------------------------------------------------------------
// -------------------------------------------------------------------------------
export function setUPLINK(id, lat, long, value) {
  db.transaction(function (txn) {
    txn.executeSql(
      'INSERT INTO UPLINK (time_id, lat, long, value) VALUES (?, ?, ?, ?)',
      [id, lat, long, value],
      e => {
        console.log(e);
      },
      e => {
        console.warn('error', e);
      },
    );
  });
}

export function getAllUPLINK(onSuccess) {
  db.transaction(function (txn) {
    txn.executeSql('SELECT * FROM `UPLINK`', [], function (tx, res) {
      const result = [];
      for (let i = 0; i < res.rows.length; ++i) {
        result.push(res.rows.item(i));
      }
      onSuccess(result);
    });
  });
}

export function getUPLINKById(id, onSuccess) {
  db.transaction(function (txn) {
    txn.executeSql(
      'SELECT * FROM `UPLINK` WHERE time_id = (?)',
      [id],
      function (tx, res) {
        if (res.rows.length) onSuccess(res.rows.item(0));
      },
    );
  });
}

// -------------------------------------------------------------------------------
// DOWNLINK ------------------------------------------------------------------------
// -------------------------------------------------------------------------------
export function setDOWNLINK(id, lat, long, value) {
  db.transaction(function (txn) {
    txn.executeSql(
      'INSERT INTO DOWNLINK (time_id, lat, long, value) VALUES (?, ?, ?, ?)',
      [id, lat, long, value],
      e => {
        console.log(e);
      },
      e => {
        console.warn('error', e);
      },
    );
  });
}

export function getAllDOWNLINK(onSuccess) {
  db.transaction(function (txn) {
    txn.executeSql('SELECT * FROM `DOWNLINK`', [], function (tx, res) {
      const result = [];
      for (let i = 0; i < res.rows.length; ++i) {
        result.push(res.rows.item(i));
      }
      onSuccess(result);
    });
  });
}

export function getDOWNLINKById(id, onSuccess) {
  db.transaction(function (txn) {
    txn.executeSql(
      'SELECT * FROM `DOWNLINK` WHERE time_id = (?)',
      [id],
      function (tx, res) {
        if (res.rows.length) onSuccess(res.rows.item(0));
      },
    );
  });
}


// -------------------------------------------------------------------------------
// RSRP --------------------------------------------------------------------------
// -------------------------------------------------------------------------------
export function setRSRP(id, lat, long, value) {
  db.transaction(function (txn) {
    txn.executeSql(
      'INSERT INTO RSRP (time_id, lat, long, value) VALUES (?, ?, ?, ?)',
      [id, lat, long, value],
      e => {
        console.log(e);
      },
      e => {
        console.warn('error', e);
      },
    );
  });
}

export function getAllRSRP(onSuccess) {
  db.transaction(function (txn) {
    txn.executeSql('SELECT * FROM `RSRP`', [], function (tx, res) {
      const result = [];
      for (let i = 0; i < res.rows.length; ++i) {
        result.push(res.rows.item(i));
      }
      onSuccess(result);
    });
  });
}

export function getRSRPById(id, onSuccess) {
  db.transaction(function (txn) {
    txn.executeSql(
      'SELECT * FROM `RSRP` WHERE time_id = (?)',
      [id],
      function (tx, res) {
        if (res.rows.length) onSuccess(res.rows.item(0));
      },
    );
  });
}


// -------------------------------------------------------------------------------
// RSRQ --------------------------------------------------------------------------
// -------------------------------------------------------------------------------
export function setRSRQ(id, lat, long, value) {
  db.transaction(function (txn) {
    txn.executeSql(
      'INSERT INTO RSRQ (time_id, lat, long, value) VALUES (?, ?, ?, ?)',
      [id, lat, long, value],
      e => {
        console.log(e);
      },
      e => {
        console.warn('error', e);
      },
    );
  });
}

export function getAllRSRQ(onSuccess) {
  db.transaction(function (txn) {
    txn.executeSql('SELECT * FROM `RSRQ`', [], function (tx, res) {
      const result = [];
      for (let i = 0; i < res.rows.length; ++i) {
        result.push(res.rows.item(i));
      }
      onSuccess(result);
    });
  });
}

export function getRSRQById(id, onSuccess) {
  db.transaction(function (txn) {
    txn.executeSql(
      'SELECT * FROM `RSRQ` WHERE time_id = (?)',
      [id],
      function (tx, res) {
        if (res.rows.length) onSuccess(res.rows.item(0));
      },
    );
  });
}


// -------------------------------------------------------------------------------
// RSSI --------------------------------------------------------------------------
// -------------------------------------------------------------------------------
export function setRSSI(id, lat, long, value) {
  db.transaction(function (txn) {
    txn.executeSql(
      'INSERT INTO RSSI (time_id, lat, long, value) VALUES (?, ?, ?, ?)',
      [id, lat, long, value],
      e => {
        console.log(e);
      },
      e => {
        console.warn('error', e);
      },
    );
  });
}

export function getAllRSSI(onSuccess) {
  db.transaction(function (txn) {
    txn.executeSql('SELECT * FROM `RSSI`', [], function (tx, res) {
      const result = [];
      for (let i = 0; i < res.rows.length; ++i) {
        result.push(res.rows.item(i));
      }
      onSuccess(result);
    });
  });
}

export function getRSSIById(id, onSuccess) {
  db.transaction(function (txn) {
    txn.executeSql(
      'SELECT * FROM `RSSI` WHERE time_id = (?)',
      [id],
      function (tx, res) {
        if (res.rows.length) onSuccess(res.rows.item(0));
      },
    );
  });
}
// txn.executeSql('INSERT INTO Users (name) VALUES (:name)', ['nora']);
//   txn.executeSql('INSERT INTO Users (name) VALUES (:name)', ['takuya']);
//   txn.executeSql('SELECT * FROM `users`', [], function (tx, res) {
//     for (let i = 0; i < res.rows.length; ++i) {
//       console.log('item:', res.rows.item(i));
//     }
//   });
