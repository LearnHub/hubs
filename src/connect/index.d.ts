// Type declarations for the connect module (protobuf-es v2 schema-based API)
// Only types referenced by the hubs codebase are declared here.

export namespace PB {

  // --- Utility: create instances from schemas ---
  type MessageShape<S> = S extends { typeName: string } ? Record<string, any> : never;
  function create<S extends { typeName: string }>(schema: S, init?: Record<string, any>): any;

  // --- Schema objects (used with PB.create()) ---
  const AuthorizationSchema: { typeName: string };
  const ClientCredentialsSchema: { typeName: string };
  const TranscodeImageSpecSchema: { typeName: string };
  const LessonContextSchema: { typeName: string };

  // --- Message types (interfaces for type annotations) ---

  interface RoomInfo {
    roomId: string;
    assetId: string;
    name: string;
    assetParameters?: { [key: string]: string };
    iconUrl?: string;
    activityId?: number;
    dimensionId?: string;
  }

  interface Activity {
    [key: string]: any;
  }

  interface LessonContext {
    focus?: LessonFocus;
  }

  interface LessonFocus {
    roomId: string;
    assetId: string;
    position?: any;
    backLock?: boolean;
    exploreLock?: boolean;
    navigationLock?: boolean;
    roomLock?: boolean;
  }

  interface DimensionInfo {
    passId?: string;
    accessLimits?: { dimensionCapacity?: number };
  }

  interface ConnectionInstance {
    credentials?: any;
    user?: { userId?: number };
    permissions?: {
      allowBack?: boolean;
      allowExplore?: boolean;
      allowNavigation?: boolean;
      allowVoip?: boolean;
      allowText?: boolean;
      allowMoveMedia?: boolean;
    };
    features?: {
      showNavbar?: boolean;
      showSidebar?: boolean;
      showRoomEntryFlow?: boolean;
    };
  }

  interface Authorization {
    userJwt?: string;
    dimensionId?: string;
    credentials?: any;
  }

  interface DimensionStatus {
    state?: number;
    detail?: string;
  }

  interface DimensionEvent {
    status?: DimensionStatus;
    connection?: ConnectionInstance;
    info?: DimensionInfo;
    lesson?: LessonContext;
  }

  interface Channel {
    [key: string]: any;
  }

  interface Profile {
    [key: string]: any;
  }

  interface Category {
    [key: string]: any;
  }

  interface Pass {
    [key: string]: any;
  }

  interface OrganizationMembership {
    roleId: number;
    organizationId: number;
  }

  interface Organization {
    [key: string]: any;
  }

  interface Role {
    roleId: number;
    [key: string]: any;
  }

  interface TranscodeImageSpec {
    maxSizePixels?: number;
  }

  interface ClientCredentials {
    clientId: string;
  }

  interface HealthCheckResponse {
    status: number;
  }

  // --- Enums ---

  const OperationState: {
    UNSPECIFIED: number;
    OPEN: number;
    CLOSED: number;
    NOT_FOUND: number;
    FORBIDDEN: number;
    EXPIRED: number;
    PROCESSING: number;
    SUCCESS: number;
    CANCELED: number;
    TOO_MANY_REQUESTS: number;
    ERROR: number;
  };
  type OperationState = number;

  const HealthCheckResponse_ServingStatus: {
    UNKNOWN: number;
    SERVING: number;
    NOT_SERVING: number;
    SERVICE_UNKNOWN: number;
  };

  const TagFilterCondition: {
    UNSPECIFIED: number;
    HAS_ANY_OF: number;
    HAS_ALL_OF: number;
    HAS_NONE_OF: number;
  };

  const EntityProperty: {
    UNSPECIFIED: number;
    NAME: number;
    [key: string]: number;
  };

  const SortOrder: {
    UNSPECIFIED: number;
    ASC: number;
    DESC: number;
  };

  const TagId: {
    UNKNOWN: number;
    NOT_BROWSABLE: number;
    LESSON_PLAN: number;
    SCENE_GUIDE: number;
    SCENE: number;
    AVATAR: number;
    [key: string]: number;
  };

  const TranslationFormat: {
    UNDEFINED: number;
    PLAIN_TEXT: number;
    MARKDOWN: number;
    HTML: number;
    [key: string]: number;
  };
}

// --- ConnectServices ---

export class ConnectServices {
  constructor(endpoint: string);
  Clients: {
    createClientCredentials(req: any): Promise<any>;
    recordAction(req: any): Promise<any>;
  };
  Health: {
    check(req: any): Promise<PB.HealthCheckResponse>;
  };
  Channels: {
    getBrowsableChannels(req: any): Promise<any>;
    getProfiles(req: any): Promise<any>;
    getActivities(req: any): Promise<any>;
    getCategories(req: any): Promise<any>;
  };
  Profiles: {
    getCategories(req: any): Promise<any>;
    getActivities(req: any): Promise<any>;
  };
  Categories: {
    getActivities(req: any): Promise<any>;
  };
  Passes: {
    getPass(req: any): Promise<any>;
  };
  Dimensions: {
    createDimension(req: any): Promise<any>;
    joinDimension(req: any, options?: any): AsyncIterable<PB.DimensionEvent>;
    setLessonContext(req: any): Promise<any>;
  };
  Rooms: {
    getRoom(req: any): Promise<any>;
    openRoom(req: any): Promise<any>;
    enterRoom(req: any): Promise<any>;
    resolveMedia(req: any): Promise<any>;
  };
  Users: {
    getOrganizationMembership(req: any): Promise<any>;
  };
  Organizations: {
    getOrganization(req: any): Promise<any>;
    joinOrganization(req: any): Promise<any>;
  };
  Roles: {
    getRoles(req: any): Promise<any>;
  };
  Licenses: {
    getUserLicenses(req: any): Promise<any>;
  };
  Activities: {
    getActivity(req: any): Promise<any>;
  };
}

// --- Avnfs ---

export namespace Avnfs {
  const UrlPrefix: string;
  function isValidUrl(url: URL): boolean;
  function decodeUrl(url: URL): { mediaType: string; [key: string]: any };
}
