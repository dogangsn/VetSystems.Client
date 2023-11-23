export interface InventoryPagination {
    length: number;
    size: number;
    page: number;
    lastPage: number;
    startIndex: number;
    endIndex: number;
}

export interface SexTYpe {
    id: string;
    parentId: string;
    name: string;
    slug: string;
}

export interface InventoryBrand {
    id: string;
    name: string;
    slug: string;
}

export interface InventoryTag {
    id?: string;
    title?: string;
}

export interface InventoryVendor {
    id: string;
    name: string;
    slug: string;
}

export interface PatientDetails {
    id: string;
    name: string;
    birthDate: Date | null;
    chipNumber: string | null;
    sex: string;
    animalType: number;
    animalBreed: number;
    animalColor: string;
    reportNumber: string | null;
    specialNote: string | null;
    sterilization: boolean;
    tags?: string[];
    images: string[];
    active: boolean;
    thumbnail: string;
}
