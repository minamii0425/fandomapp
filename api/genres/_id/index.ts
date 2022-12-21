/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /** 指定したIDを持つジャンルの詳細を取得する。 */
  get: {
    reqHeaders?: {
      /** リクエストユーザーのAPIキー */
      'X-Api-Key'?: Types.XApiKey | undefined
    } | undefined

    status: 200
    /** Successful */
    resBody: Types.Genres
  }

  /** 指定したIDを持つジャンルを削除する。 */
  delete: {
    reqHeaders?: {
      /** リクエストユーザーのAPIキー */
      'X-Api-Key'?: Types.XApiKey | undefined
    } | undefined

    query: {
      genreID: Types.GenreID
    }

    status: 200
    /** Successful */
    resBody: Types.PostResponseBody
  }

  /** 指定したIDを持つジャンルを更新する。 */
  put: {
    reqHeaders?: {
      /** リクエストユーザーのAPIキー */
      'X-Api-Key'?: Types.XApiKey | undefined
    } | undefined

    query: {
      genreID: Types.GenreID
    }

    status: 200
    /** Successful */
    resBody: Types.PostResponseBody
    reqBody: Types.Genre
  }
}
