/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /** 指定したIDを持つオン作品の詳細を取得する。 */
  get: {
    reqHeaders?: {
      /** リクエストユーザーのAPIキー */
      'X-Api-Key'?: Types.XApiKey | undefined
    } | undefined

    status: 200
    /** Successful */
    resBody: Types.Fanfic
  }

  /** 指定したIDを持つオン作品を削除する。 */
  delete: {
    reqHeaders?: {
      /** リクエストユーザーのAPIキー */
      'X-Api-Key'?: Types.XApiKey | undefined
    } | undefined

    query: {
      'オン作品のID': Types.FanficID
    }

    status: 200
    /** Successful */
    resBody: Types.PostResponseBody
  }

  /** 指定したIDを持つオン作品を更新する。 */
  put: {
    reqHeaders?: {
      /** リクエストユーザーのAPIキー */
      'X-Api-Key'?: Types.XApiKey | undefined
    } | undefined

    query: {
      'オン作品のID': Types.FanficID
    }

    status: 200
    /** Successful */
    resBody: Types.PostResponseBody
    reqBody: Types.Fanfic
  }
}
