/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
import { Observable } from "zen-observable-ts";

export interface SubscriptionResponse<T> {
  value: GraphQLResult<T>;
}

export type __SubscriptionContainer = {
  onCreateCategory: OnCreateCategorySubscription;
  onUpdateCategory: OnUpdateCategorySubscription;
  onDeleteCategory: OnDeleteCategorySubscription;
  onCreateShopItem: OnCreateShopItemSubscription;
  onUpdateShopItem: OnUpdateShopItemSubscription;
  onDeleteShopItem: OnDeleteShopItemSubscription;
};

export type CreateCategoryInput = {
  id?: string | null;
  name?: string | null;
  description?: string | null;
  active?: boolean | null;
  image?: string | null;
};

export type ModelCategoryConditionInput = {
  name?: ModelStringInput | null;
  description?: ModelStringInput | null;
  active?: ModelBooleanInput | null;
  image?: ModelStringInput | null;
  and?: Array<ModelCategoryConditionInput | null> | null;
  or?: Array<ModelCategoryConditionInput | null> | null;
  not?: ModelCategoryConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null"
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type ModelBooleanInput = {
  ne?: boolean | null;
  eq?: boolean | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type Category = {
  __typename: "Category";
  id: string;
  name?: string | null;
  description?: string | null;
  active?: boolean | null;
  image?: string | null;
  ShopItems?: ModelShopItemConnection | null;
  createdAt: string;
  updatedAt: string;
};

export type ModelShopItemConnection = {
  __typename: "ModelShopItemConnection";
  items: Array<ShopItem | null>;
  nextToken?: string | null;
};

export type ShopItem = {
  __typename: "ShopItem";
  id: string;
  name: string;
  description: string;
  price?: string | null;
  image?: string | null;
  active: boolean;
  special_offer?: boolean | null;
  categoryID: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdateCategoryInput = {
  id: string;
  name?: string | null;
  description?: string | null;
  active?: boolean | null;
  image?: string | null;
};

export type DeleteCategoryInput = {
  id: string;
};

export type CreateShopItemInput = {
  id?: string | null;
  name: string;
  description: string;
  price?: string | null;
  image?: string | null;
  active: boolean;
  special_offer?: boolean | null;
  categoryID: string;
};

export type ModelShopItemConditionInput = {
  name?: ModelStringInput | null;
  description?: ModelStringInput | null;
  price?: ModelStringInput | null;
  image?: ModelStringInput | null;
  active?: ModelBooleanInput | null;
  special_offer?: ModelBooleanInput | null;
  categoryID?: ModelIDInput | null;
  and?: Array<ModelShopItemConditionInput | null> | null;
  or?: Array<ModelShopItemConditionInput | null> | null;
  not?: ModelShopItemConditionInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type UpdateShopItemInput = {
  id: string;
  name?: string | null;
  description?: string | null;
  price?: string | null;
  image?: string | null;
  active?: boolean | null;
  special_offer?: boolean | null;
  categoryID?: string | null;
};

export type DeleteShopItemInput = {
  id: string;
};

export type ModelCategoryFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  description?: ModelStringInput | null;
  active?: ModelBooleanInput | null;
  image?: ModelStringInput | null;
  and?: Array<ModelCategoryFilterInput | null> | null;
  or?: Array<ModelCategoryFilterInput | null> | null;
  not?: ModelCategoryFilterInput | null;
};

export type ModelCategoryConnection = {
  __typename: "ModelCategoryConnection";
  items: Array<Category | null>;
  nextToken?: string | null;
};

export type ModelShopItemFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  description?: ModelStringInput | null;
  price?: ModelStringInput | null;
  image?: ModelStringInput | null;
  active?: ModelBooleanInput | null;
  special_offer?: ModelBooleanInput | null;
  categoryID?: ModelIDInput | null;
  and?: Array<ModelShopItemFilterInput | null> | null;
  or?: Array<ModelShopItemFilterInput | null> | null;
  not?: ModelShopItemFilterInput | null;
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC"
}

export type ModelSubscriptionCategoryFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  name?: ModelSubscriptionStringInput | null;
  description?: ModelSubscriptionStringInput | null;
  active?: ModelSubscriptionBooleanInput | null;
  image?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionCategoryFilterInput | null> | null;
  or?: Array<ModelSubscriptionCategoryFilterInput | null> | null;
};

export type ModelSubscriptionIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  in?: Array<string | null> | null;
  notIn?: Array<string | null> | null;
};

export type ModelSubscriptionStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  in?: Array<string | null> | null;
  notIn?: Array<string | null> | null;
};

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null;
  eq?: boolean | null;
};

export type ModelSubscriptionShopItemFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  name?: ModelSubscriptionStringInput | null;
  description?: ModelSubscriptionStringInput | null;
  price?: ModelSubscriptionStringInput | null;
  image?: ModelSubscriptionStringInput | null;
  active?: ModelSubscriptionBooleanInput | null;
  special_offer?: ModelSubscriptionBooleanInput | null;
  categoryID?: ModelSubscriptionIDInput | null;
  and?: Array<ModelSubscriptionShopItemFilterInput | null> | null;
  or?: Array<ModelSubscriptionShopItemFilterInput | null> | null;
};

export type CreateCategoryMutation = {
  __typename: "Category";
  id: string;
  name?: string | null;
  description?: string | null;
  active?: boolean | null;
  image?: string | null;
  ShopItems?: {
    __typename: "ModelShopItemConnection";
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateCategoryMutation = {
  __typename: "Category";
  id: string;
  name?: string | null;
  description?: string | null;
  active?: boolean | null;
  image?: string | null;
  ShopItems?: {
    __typename: "ModelShopItemConnection";
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteCategoryMutation = {
  __typename: "Category";
  id: string;
  name?: string | null;
  description?: string | null;
  active?: boolean | null;
  image?: string | null;
  ShopItems?: {
    __typename: "ModelShopItemConnection";
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateShopItemMutation = {
  __typename: "ShopItem";
  id: string;
  name: string;
  description: string;
  price?: string | null;
  image?: string | null;
  active: boolean;
  special_offer?: boolean | null;
  categoryID: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdateShopItemMutation = {
  __typename: "ShopItem";
  id: string;
  name: string;
  description: string;
  price?: string | null;
  image?: string | null;
  active: boolean;
  special_offer?: boolean | null;
  categoryID: string;
  createdAt: string;
  updatedAt: string;
};

export type DeleteShopItemMutation = {
  __typename: "ShopItem";
  id: string;
  name: string;
  description: string;
  price?: string | null;
  image?: string | null;
  active: boolean;
  special_offer?: boolean | null;
  categoryID: string;
  createdAt: string;
  updatedAt: string;
};

export type GetCategoryQuery = {
  __typename: "Category";
  id: string;
  name?: string | null;
  description?: string | null;
  active?: boolean | null;
  image?: string | null;
  ShopItems?: {
    __typename: "ModelShopItemConnection";
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type ListCategoriesQuery = {
  __typename: "ModelCategoryConnection";
  items: Array<{
    __typename: "Category";
    id: string;
    name?: string | null;
    description?: string | null;
    active?: boolean | null;
    image?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
};

export type GetShopItemQuery = {
  __typename: "ShopItem";
  id: string;
  name: string;
  description: string;
  price?: string | null;
  image?: string | null;
  active: boolean;
  special_offer?: boolean | null;
  categoryID: string;
  createdAt: string;
  updatedAt: string;
};

export type ListShopItemsQuery = {
  __typename: "ModelShopItemConnection";
  items: Array<{
    __typename: "ShopItem";
    id: string;
    name: string;
    description: string;
    price?: string | null;
    image?: string | null;
    active: boolean;
    special_offer?: boolean | null;
    categoryID: string;
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
};

export type ShopItemsByCategoryIDQuery = {
  __typename: "ModelShopItemConnection";
  items: Array<{
    __typename: "ShopItem";
    id: string;
    name: string;
    description: string;
    price?: string | null;
    image?: string | null;
    active: boolean;
    special_offer?: boolean | null;
    categoryID: string;
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
};

export type OnCreateCategorySubscription = {
  __typename: "Category";
  id: string;
  name?: string | null;
  description?: string | null;
  active?: boolean | null;
  image?: string | null;
  ShopItems?: {
    __typename: "ModelShopItemConnection";
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateCategorySubscription = {
  __typename: "Category";
  id: string;
  name?: string | null;
  description?: string | null;
  active?: boolean | null;
  image?: string | null;
  ShopItems?: {
    __typename: "ModelShopItemConnection";
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteCategorySubscription = {
  __typename: "Category";
  id: string;
  name?: string | null;
  description?: string | null;
  active?: boolean | null;
  image?: string | null;
  ShopItems?: {
    __typename: "ModelShopItemConnection";
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateShopItemSubscription = {
  __typename: "ShopItem";
  id: string;
  name: string;
  description: string;
  price?: string | null;
  image?: string | null;
  active: boolean;
  special_offer?: boolean | null;
  categoryID: string;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateShopItemSubscription = {
  __typename: "ShopItem";
  id: string;
  name: string;
  description: string;
  price?: string | null;
  image?: string | null;
  active: boolean;
  special_offer?: boolean | null;
  categoryID: string;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteShopItemSubscription = {
  __typename: "ShopItem";
  id: string;
  name: string;
  description: string;
  price?: string | null;
  image?: string | null;
  active: boolean;
  special_offer?: boolean | null;
  categoryID: string;
  createdAt: string;
  updatedAt: string;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateCategory(
    input: CreateCategoryInput,
    condition?: ModelCategoryConditionInput
  ): Promise<CreateCategoryMutation> {
    const statement = `mutation CreateCategory($input: CreateCategoryInput!, $condition: ModelCategoryConditionInput) {
        createCategory(input: $input, condition: $condition) {
          __typename
          id
          name
          description
          active
          image
          ShopItems {
            __typename
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateCategoryMutation>response.data.createCategory;
  }
  async UpdateCategory(
    input: UpdateCategoryInput,
    condition?: ModelCategoryConditionInput
  ): Promise<UpdateCategoryMutation> {
    const statement = `mutation UpdateCategory($input: UpdateCategoryInput!, $condition: ModelCategoryConditionInput) {
        updateCategory(input: $input, condition: $condition) {
          __typename
          id
          name
          description
          active
          image
          ShopItems {
            __typename
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateCategoryMutation>response.data.updateCategory;
  }
  async DeleteCategory(
    input: DeleteCategoryInput,
    condition?: ModelCategoryConditionInput
  ): Promise<DeleteCategoryMutation> {
    const statement = `mutation DeleteCategory($input: DeleteCategoryInput!, $condition: ModelCategoryConditionInput) {
        deleteCategory(input: $input, condition: $condition) {
          __typename
          id
          name
          description
          active
          image
          ShopItems {
            __typename
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteCategoryMutation>response.data.deleteCategory;
  }
  async CreateShopItem(
    input: CreateShopItemInput,
    condition?: ModelShopItemConditionInput
  ): Promise<CreateShopItemMutation> {
    const statement = `mutation CreateShopItem($input: CreateShopItemInput!, $condition: ModelShopItemConditionInput) {
        createShopItem(input: $input, condition: $condition) {
          __typename
          id
          name
          description
          price
          image
          active
          special_offer
          categoryID
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateShopItemMutation>response.data.createShopItem;
  }
  async UpdateShopItem(
    input: UpdateShopItemInput,
    condition?: ModelShopItemConditionInput
  ): Promise<UpdateShopItemMutation> {
    const statement = `mutation UpdateShopItem($input: UpdateShopItemInput!, $condition: ModelShopItemConditionInput) {
        updateShopItem(input: $input, condition: $condition) {
          __typename
          id
          name
          description
          price
          image
          active
          special_offer
          categoryID
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateShopItemMutation>response.data.updateShopItem;
  }
  async DeleteShopItem(
    input: DeleteShopItemInput,
    condition?: ModelShopItemConditionInput
  ): Promise<DeleteShopItemMutation> {
    const statement = `mutation DeleteShopItem($input: DeleteShopItemInput!, $condition: ModelShopItemConditionInput) {
        deleteShopItem(input: $input, condition: $condition) {
          __typename
          id
          name
          description
          price
          image
          active
          special_offer
          categoryID
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteShopItemMutation>response.data.deleteShopItem;
  }
  async GetCategory(id: string): Promise<GetCategoryQuery> {
    const statement = `query GetCategory($id: ID!) {
        getCategory(id: $id) {
          __typename
          id
          name
          description
          active
          image
          ShopItems {
            __typename
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetCategoryQuery>response.data.getCategory;
  }
  async ListCategories(
    filter?: ModelCategoryFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListCategoriesQuery> {
    const statement = `query ListCategories($filter: ModelCategoryFilterInput, $limit: Int, $nextToken: String) {
        listCategories(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            description
            active
            image
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListCategoriesQuery>response.data.listCategories;
  }
  async GetShopItem(id: string): Promise<GetShopItemQuery> {
    const statement = `query GetShopItem($id: ID!) {
        getShopItem(id: $id) {
          __typename
          id
          name
          description
          price
          image
          active
          special_offer
          categoryID
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetShopItemQuery>response.data.getShopItem;
  }
  async ListShopItems(
    filter?: ModelShopItemFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListShopItemsQuery> {
    const statement = `query ListShopItems($filter: ModelShopItemFilterInput, $limit: Int, $nextToken: String) {
        listShopItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            description
            price
            image
            active
            special_offer
            categoryID
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListShopItemsQuery>response.data.listShopItems;
  }
  async ShopItemsByCategoryID(
    categoryID: string,
    sortDirection?: ModelSortDirection,
    filter?: ModelShopItemFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ShopItemsByCategoryIDQuery> {
    const statement = `query ShopItemsByCategoryID($categoryID: ID!, $sortDirection: ModelSortDirection, $filter: ModelShopItemFilterInput, $limit: Int, $nextToken: String) {
        shopItemsByCategoryID(
          categoryID: $categoryID
          sortDirection: $sortDirection
          filter: $filter
          limit: $limit
          nextToken: $nextToken
        ) {
          __typename
          items {
            __typename
            id
            name
            description
            price
            image
            active
            special_offer
            categoryID
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {
      categoryID
    };
    if (sortDirection) {
      gqlAPIServiceArguments.sortDirection = sortDirection;
    }
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ShopItemsByCategoryIDQuery>response.data.shopItemsByCategoryID;
  }
  OnCreateCategoryListener(
    filter?: ModelSubscriptionCategoryFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateCategory">>
  > {
    const statement = `subscription OnCreateCategory($filter: ModelSubscriptionCategoryFilterInput) {
        onCreateCategory(filter: $filter) {
          __typename
          id
          name
          description
          active
          image
          ShopItems {
            __typename
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateCategory">>
    >;
  }

  OnUpdateCategoryListener(
    filter?: ModelSubscriptionCategoryFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateCategory">>
  > {
    const statement = `subscription OnUpdateCategory($filter: ModelSubscriptionCategoryFilterInput) {
        onUpdateCategory(filter: $filter) {
          __typename
          id
          name
          description
          active
          image
          ShopItems {
            __typename
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateCategory">>
    >;
  }

  OnDeleteCategoryListener(
    filter?: ModelSubscriptionCategoryFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteCategory">>
  > {
    const statement = `subscription OnDeleteCategory($filter: ModelSubscriptionCategoryFilterInput) {
        onDeleteCategory(filter: $filter) {
          __typename
          id
          name
          description
          active
          image
          ShopItems {
            __typename
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteCategory">>
    >;
  }

  OnCreateShopItemListener(
    filter?: ModelSubscriptionShopItemFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateShopItem">>
  > {
    const statement = `subscription OnCreateShopItem($filter: ModelSubscriptionShopItemFilterInput) {
        onCreateShopItem(filter: $filter) {
          __typename
          id
          name
          description
          price
          image
          active
          special_offer
          categoryID
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateShopItem">>
    >;
  }

  OnUpdateShopItemListener(
    filter?: ModelSubscriptionShopItemFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateShopItem">>
  > {
    const statement = `subscription OnUpdateShopItem($filter: ModelSubscriptionShopItemFilterInput) {
        onUpdateShopItem(filter: $filter) {
          __typename
          id
          name
          description
          price
          image
          active
          special_offer
          categoryID
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateShopItem">>
    >;
  }

  OnDeleteShopItemListener(
    filter?: ModelSubscriptionShopItemFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteShopItem">>
  > {
    const statement = `subscription OnDeleteShopItem($filter: ModelSubscriptionShopItemFilterInput) {
        onDeleteShopItem(filter: $filter) {
          __typename
          id
          name
          description
          price
          image
          active
          special_offer
          categoryID
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteShopItem">>
    >;
  }
}
