/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /** 指定したIDを持つオフ本の詳細を取得する。 */
  get: {
    reqHeaders?: {
      /** リクエストユーザーのAPIキー */
      'X-Api-Key'?: Types.XApiKey | undefined
    } | undefined

    status: 200
    /** Successful */
    resBody: Types.Fanbook
  }

  /** 指定したIDを持つオフ本を削除する。 */
  delete: {
    reqHeaders?: {
      /** リクエストユーザーのAPIキー */
      'X-Api-Key'?: Types.XApiKey | undefined
    } | undefined

    query: {
      'オフ本のID': Types.FanbookID
    }

    status: 200
    /** Successful */
    resBody: Types.PostResponseBody
  }

  /** 指定したIDを持つオフ本を更新する。 */
  put: {
    reqHeaders?: {
      /** リクエストユーザーのAPIキー */
      'X-Api-Key'?: Types.XApiKey | undefined
    } | undefined

    query: {
      'オフ本のID': Types.FanbookID
    }

    status: 200
    /** Successful */
    resBody: Types.PostResponseBody
    reqBody: Types.Fanbook
  }
}
