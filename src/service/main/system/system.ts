import HyRequest from '../../index'
import { IDataType } from '../../types'

export function getPageListData(url: string, queryInfo: any) {
  return HyRequest.post<IDataType>({
    url: url,
    data: queryInfo
  })
}
