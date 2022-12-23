import type { AspidaClient, BasicHeaders } from 'aspida'
import { dataToURLString } from 'aspida'
import type { Methods as Methods0 } from '.'
import type { Methods as Methods1 } from './_id'

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'http://localhost:3010/api/' : baseURL).replace(/\/$/, '')
  const PATH0 = '/genres'
  const GET = 'GET'
  const POST = 'POST'
  const PUT = 'PUT'
  const DELETE = 'DELETE'

  return {
    _id: (val0: number | string) => {
      const prefix0 = `${PATH0}/${val0}`

      return {
        /**
         * 指定したIDを持つジャンルの詳細を取得する。
         * @returns Successful
         */
        get: (option?: { headers?: Methods1['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, prefix0, GET, option).json(),
        /**
         * 指定したIDを持つジャンルの詳細を取得する。
         * @returns Successful
         */
        $get: (option?: { headers?: Methods1['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, prefix0, GET, option).json().then(r => r.body),
        /**
         * 指定したIDを持つジャンルを削除する。
         * @returns Successful
         */
        delete: (option: { query: Methods1['delete']['query'], headers?: Methods1['delete']['reqHeaders'] | undefined, config?: T | undefined }) =>
          fetch<Methods1['delete']['resBody'], BasicHeaders, Methods1['delete']['status']>(prefix, prefix0, DELETE, option).json(),
        /**
         * 指定したIDを持つジャンルを削除する。
         * @returns Successful
         */
        $delete: (option: { query: Methods1['delete']['query'], headers?: Methods1['delete']['reqHeaders'] | undefined, config?: T | undefined }) =>
          fetch<Methods1['delete']['resBody'], BasicHeaders, Methods1['delete']['status']>(prefix, prefix0, DELETE, option).json().then(r => r.body),
        /**
         * 指定したIDを持つジャンルを更新する。
         * @returns Successful
         */
        put: (option: { body: Methods1['put']['reqBody'], query: Methods1['put']['query'], headers?: Methods1['put']['reqHeaders'] | undefined, config?: T | undefined }) =>
          fetch<Methods1['put']['resBody'], BasicHeaders, Methods1['put']['status']>(prefix, prefix0, PUT, option).json(),
        /**
         * 指定したIDを持つジャンルを更新する。
         * @returns Successful
         */
        $put: (option: { body: Methods1['put']['reqBody'], query: Methods1['put']['query'], headers?: Methods1['put']['reqHeaders'] | undefined, config?: T | undefined }) =>
          fetch<Methods1['put']['resBody'], BasicHeaders, Methods1['put']['status']>(prefix, prefix0, PUT, option).json().then(r => r.body),
        $path: (option?: { method: 'delete'; query: Methods1['delete']['query'] } | { method: 'put'; query: Methods1['put']['query'] } | undefined) =>
          `${prefix}${prefix0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
      }
    },
    /**
     * 登録されているすべてのジャンルを取得する。
     * @returns Successful operation
     */
    get: (option?: { headers?: Methods0['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
      fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, PATH0, GET, option).json(),
    /**
     * 登録されているすべてのジャンルを取得する。
     * @returns Successful operation
     */
    $get: (option?: { headers?: Methods0['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
      fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, PATH0, GET, option).json().then(r => r.body),
    /**
     * ジャンルの登録を行う。
     * @returns Successful
     */
    post: (option: { body: Methods0['post']['reqBody'], headers?: Methods0['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
      fetch<Methods0['post']['resBody'], BasicHeaders, Methods0['post']['status']>(prefix, PATH0, POST, option).json(),
    /**
     * ジャンルの登録を行う。
     * @returns Successful
     */
    $post: (option: { body: Methods0['post']['reqBody'], headers?: Methods0['post']['reqHeaders'] | undefined, config?: T | undefined }) =>
      fetch<Methods0['post']['resBody'], BasicHeaders, Methods0['post']['status']>(prefix, PATH0, POST, option).json().then(r => r.body),
    /**
     * 複数ジャンルの削除を行う。
     * @returns Successful
     */
    delete: (option: { body: Methods0['delete']['reqBody'], headers?: Methods0['delete']['reqHeaders'] | undefined, config?: T | undefined }) =>
      fetch<Methods0['delete']['resBody'], BasicHeaders, Methods0['delete']['status']>(prefix, PATH0, DELETE, option).json(),
    /**
     * 複数ジャンルの削除を行う。
     * @returns Successful
     */
    $delete: (option: { body: Methods0['delete']['reqBody'], headers?: Methods0['delete']['reqHeaders'] | undefined, config?: T | undefined }) =>
      fetch<Methods0['delete']['resBody'], BasicHeaders, Methods0['delete']['status']>(prefix, PATH0, DELETE, option).json().then(r => r.body),
    $path: () => `${prefix}${PATH0}`
  }
}

export type ApiInstance = ReturnType<typeof api>
export default api
