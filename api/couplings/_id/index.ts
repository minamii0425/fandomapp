/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /** 指定したIDを持つカップリングの詳細を取得する。 */
  get: {
    reqHeaders?: {
      /** リクエストユーザーのAPIキー */
      'X-Api-Key'?: Types.XApiKey | undefined
    } | undefined

    status: 200
    /** Successful */
    resBody: Types.Coupling
  }

  /** 指定したIDを持つカップリングを削除する。 */
  delete: {
    reqHeaders?: {
      /** リクエストユーザーのAPIキー */
      'X-Api-Key'?: Types.XApiKey | undefined
    } | undefined

    query: {
      couplingID: Types.CouplingID
    }

    status: 200
    /** Successful */
    resBody: Types.PostResponseBody
  }

  /** 指定したIDを持つカップリングを更新する。 */
  put: {
    reqHeaders?: {
      /** リクエストユーザーのAPIキー */
      'X-Api-Key'?: Types.XApiKey | undefined
    } | undefined

    query: {
      couplingID: Types.CouplingID
    }

    status: 200
    /** Successful */
    resBody: Types.PostResponseBody
    reqBody: Types.Coupling
  }
}
