/* eslint-disable */
import type * as Types from '../@types'

export type Methods = {
  /** 登録されているすべてのジャンルを取得する。 */
  get: {
    reqHeaders?: {
      /** リクエストユーザーのAPIキー */
      'X-Api-Key'?: Types.XApiKey | undefined
    } | undefined

    status: 200
    /** Successful operation */
    resBody: Types.Genres
  }

  /** ジャンルの登録を行う。 */
  post: {
    reqHeaders?: {
      /** リクエストユーザーのAPIキー */
      'X-Api-Key'?: Types.XApiKey | undefined
    } | undefined

    status: 200
    /** Successful */
    resBody: Types.PostResponseBody
    reqBody: Types.Genre
  }

  /** 複数ジャンルの削除を行う。 */
  delete: {
    reqHeaders?: {
      /** リクエストユーザーのAPIキー */
      'X-Api-Key'?: Types.XApiKey | undefined
    } | undefined

    status: 200
    /** Successful */
    resBody: Types.PostResponseBody
    reqBody: Types.GenreIDs
  }
}
