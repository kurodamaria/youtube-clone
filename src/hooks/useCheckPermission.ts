import {useEffect, useState} from "react";

// for an up to date permission name list
// https://w3c.github.io/permissions/#enumdef-permissionname
export function useCheckPermission(name: string) {
  const [state, setState] = useState<string>('initial')
  useEffect(() => {
    let status: PermissionStatus;
    const handle = () => {
      setState(status.state)
    }
    navigator.permissions.query({name} as PermissionDescriptor).then((res) => {
      status = res
      handle()
      status.addEventListener('change', handle)
    })
    return () => {
      status.removeEventListener('change', handle)
    }
  }, [name])
  return state
}
