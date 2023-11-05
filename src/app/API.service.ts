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
  onCreateShopItem: OnCreateShopItemSubscription;
  onUpdateShopItem: OnUpdateShopItemSubscription;
  onDeleteShopItem: OnDeleteShopItemSubscription;
};

export type CreateShopItemInput = {
  id?: string | null;
  name: string;
  description: string;
};

export type ModelShopItemConditionInput = {
  name?: ModelStringInput | null;
  description?: ModelStringInput | null;
  and?: Array<ModelShopItemConditionInput | null> | null;
  or?: Array<ModelShopItemConditionInput | null> | null;
  not?: ModelShopItemConditionInput | null;
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

export type ShopItem = {
  __typename: "ShopItem";
  id: string;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdateShopItemInput = {
  id: string;
  name?: string | null;
  description?: string | null;
};

export type DeleteShopItemInput = {
  id: string;
};

export type ModelShopItemFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  description?: ModelStringInput | null;
  and?: Array<ModelShopItemFilterInput | null> | null;
  or?: Array<ModelShopItemFilterInput | null> | null;
  not?: ModelShopItemFilterInput | null;
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

export type ModelShopItemConnection = {
  __typename: "ModelShopItemConnection";
  items: Array<ShopItem | null>;
  nextToken?: string | null;
};

export type ModelSubscriptionShopItemFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  name?: ModelSubscriptionStringInput | null;
  description?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionShopItemFilterInput | null> | null;
  or?: Array<ModelSubscriptionShopItemFilterInput | null> | null;
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

export type CreateShopItemMutation = {
  __typename: "ShopItem";
  id: string;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdateShopItemMutation = {
  __typename: "ShopItem";
  id: string;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
};

export type DeleteShopItemMutation = {
  __typename: "ShopItem";
  id: string;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
};

export type GetShopItemQuery = {
  __typename: "ShopItem";
  id: string;
  name: string;
  description: string;
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
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
};

export type OnCreateShopItemSubscription = {
  __typename: "ShopItem";
  id: string;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateShopItemSubscription = {
  __typename: "ShopItem";
  id: string;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteShopItemSubscription = {
  __typename: "ShopItem";
  id: string;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
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
  async GetShopItem(id: string): Promise<GetShopItemQuery> {
    const statement = `query GetShopItem($id: ID!) {
        getShopItem(id: $id) {
          __typename
          id
          name
          description
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
