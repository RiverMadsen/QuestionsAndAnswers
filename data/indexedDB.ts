// This file handles all work related to persistence in indexedDB
const DB_NAME = 'Q_AND_A'
const DB_VERSION = 5;
export function initDatabase() {
    //debugger
    const openRequest = indexedDB.open(DB_NAME, DB_VERSION);

    // Handle the database connection event
    openRequest.onupgradeneeded = (event) => {
        upgradeDatabase(event)
    };
}
function upgradeDatabase(event) {

    if (!event || !event.target) {
        return;
    }
    const db = (event.target as IDBOpenDBRequest).result;

    // Create the object stores if they don't already exist

    // These stores are used regardless of which section is active (they are common to all)
    // Settings holds user prefs such as units (metric/standard), trailName, where the slider is,
    // syncMode, lastEnvelope, lastGPSTime etc.
    if (!db.objectStoreNames.contains('common_settings')) {
        db.createObjectStore('common_settings', { keyPath: 'id' });
    }
    // zoom levels 1-10 of the entire GDT
    if (!db.objectStoreNames.contains('common_lowResMaps')) {
        db.createObjectStore('common_lowResMaps', { keyPath: 'Name' });
    }

    // zoom levels 12-15 of the entire GDT
    if (!db.objectStoreNames.contains('highResMaps')) {
        db.createObjectStore('highResMaps', { keyPath: 'Name' });
    }

    // Pages such as Home, About, Contribute, Download, "Great Divide Trail" as well as top level
    // section pages and top level "Day by Day".
    // the pages may not
    if (!db.objectStoreNames.contains('common_pages')) {
        db.createObjectStore('common_pages', { keyPath: 'id' });
    }
    // A generalized line for the GDT and alternates appropriate for zoom level 12.
    if (!db.objectStoreNames.contains('common_lowResTrails')) {
        db.createObjectStore('common_lowResTrails', { keyPath: 'id' });
    }

    // These stores swap out every time we change sections via the selection of a zip file pages
    // contain all data for every page including an array of child pages that are used by the menu
    if (!db.objectStoreNames.contains('pages')) {
        db.createObjectStore('pages', { keyPath: 'id' });
    }
    // Zoom levels 13-15 for each section
    if (!db.objectStoreNames.contains('maps')) {
        db.createObjectStore('maps', { keyPath: 'id' });
    }
    // Detailed trail geometry appropriate for zoom levels 13-15
    if (!db.objectStoreNames.contains('trails')) {
        db.createObjectStore('trails', { keyPath: 'id' });
    }
    // Dustin Lynx's Day by Day book for each section
    if (!db.objectStoreNames.contains('dayByDay')) {
        db.createObjectStore('dayByDay', { keyPath: 'id' });
    }
    // Images used on pages and keyed by ID to match refs on the page
    if (!db.objectStoreNames.contains('images')) {
        db.createObjectStore('images', { keyPath: 'id' });
    }
    // 3D Google Earath images
    if (!db.objectStoreNames.contains('3d')) {
        db.createObjectStore('3d', { keyPath: 'id' });
    }

    // These stores are populated via Firebase or will be used to write to firebase
    // This store holds edits from OTHER users that the logged-in user can see and cast
    // votes on. An admin user can accept/reject these edits to promote them to the DB
    if (!db.objectStoreNames.contains('fb_userEdits')) {
        db.createObjectStore('fb_userEdits', { keyPath: 'id' });
    }
    // This store holds edits from the logged on user which are then synced to Firebase
    // when user goes to the Sync Edits page
    if (!db.objectStoreNames.contains('fb_myEdits')) {
        db.createObjectStore('fb_myEdits', { keyPath: 'id' });
    }
    // This store holds images which are referenced in fb_userEdits
    if (!db.objectStoreNames.contains('fb_userImages')) {
        db.createObjectStore('fb_userImages', { keyPath: 'id' });
    }
    // This store holds images which are referenced in fb_myEdits which ar synced on the
    //  Sync Edits page
    if (!db.objectStoreNames.contains('fb_myImages')) {
        db.createObjectStore('fb_myImages', { keyPath: 'id' });
    }

}
export function clearCollection(store: string,  onSuccesss: (data: any) => {}) {
    const openRequest = indexedDB.open(DB_NAME, DB_VERSION);
    openRequest.onsuccess = (event) => {
        const db = event.target.result;
        if (!db.objectStoreNames.contains(store)) {
            return
        }
        const transaction = db.transaction([store], "readwrite");
        const objectStore = transaction.objectStore(store);
        const clearRequest = objectStore.clear();
        clearRequest.onsuccess = () => {
            //debugger
            onSuccesss("store cleared")
        }
    }
}


export function getFromCollection(store: string, id: string, onSuccesss: (data: any) => {}) {
    const openRequest = indexedDB.open(DB_NAME, DB_VERSION);
    openRequest.onupgradeneeded = (event) => {
        upgradeDatabase(event)
    };
    openRequest.onsuccess = (event) => {
        const db = event.target.result;
        if (!db.objectStoreNames.contains(store)) {
            return
        }
        const transaction = db.transaction([store]);
        const objectStore = transaction.objectStore(store);
        const request = objectStore.get(id);
        request.onsuccess = (event) => {
            onSuccesss(event.target.result)
        }
    }

}

export function putToCollection(
    store: string,
    collectionArray: object[],
    onSuccess: (arg: string) => void,
) {
    const openRequest = indexedDB.open(DB_NAME, DB_VERSION);
    openRequest.onsuccess = (event) => {
        const db: IDBDatabase = (event.target as IDBOpenDBRequest).result;
        if (store === undefined) {
            return;
        }

        const transaction: IDBTransaction = db.transaction([store], 'readwrite');
        const objectStore: IDBObjectStore = transaction.objectStore(store);

        collectionArray.forEach((item) => {
            objectStore.put(item);
        });

        transaction.oncomplete = () => {
            db.close();
            onSuccess('Completed!');
        };
    };
}

// export function addToCollection(store: string, collection: object, onSuccess: () => {}) {

//   // Open a connection to the database

//   const openRequest = indexedDB.open("WalkipediaDB", DB_VERSION);

//   openRequest.onsuccess = function (event) {

//     const db: IDBDatabase = (event.target as IDBOpenDBRequest).result;
//     if(store=== undefined){
//       return;
//     }
//     const transaction: IDBTransaction = db.transaction([store], 'readwrite');
//     const objectStore: IDBObjectStore = transaction.objectStore(store);

//     const addRequest: IDBRequest = objectStore.add(collection);

//     addRequest.onsuccess = onSuccess;

//     transaction.oncomplete = (event: Event) => {
//       db.close();
//       console.log('Transaction completed');
//     };

//   };
// }

// const initUserSettings = {
//   units: 'metric',
//   screenHeight: -1,
//   screenWidth: -1,
//   gpsMode: 5,
//   syncMode: true,
//   sliderLeftPosition: 300,
//   mainContentYPosition: 400,
//   menuVisible: false,
//   userMembershipVerified: false,
//   userAuthenticated: false,
//   userName: '',
//   userPasswordHash: '',
//   trailMenu: {},
//   activeSection: 'NONE',
//   activeMenuItem: {
//     ID: '',
//     children: [],
//     type: '',
//   },
// };
