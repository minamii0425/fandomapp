/* eslint-disable */
import type * as Types from '../@types'

export type Methods = {
  /** 登録されているすべてのカップリングを取得する。 */
  get: {
    reqHeaders?: {
      /** リクエストユーザーのAPIキー */
      'X-Api-Key'?: Types.XApiKey | undefined
    } | undefined

    status: 200
    /** Successful operation */
    resBody: Types.Couplings
  }

  /** カップリングの登録を行う。 */
  post: {
    reqHeaders?: {
      /** リクエストユーザーのAPIキー */
      'X-Api-Key'?: Types.XApiKey | undefined
    } | undefined

    status: 200
    /** Successful */
    resBody: Types.PostResponseBody
    reqBody: Types.Coupling
  }
}
