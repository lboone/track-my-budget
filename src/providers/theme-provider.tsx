"use client"
import { ConfigProvider } from 'antd'
import type { ReactNode } from 'react'

let primaryColor = '#ac1706';

const ThemeProvider = ({children}: {
    children: ReactNode
}) => {
  return (
    <ConfigProvider
    theme={{
      token: {
        // Seed Token
        colorPrimary: primaryColor,
        borderRadius: 32,
      },
      components: {
        Button: {
            controlHeight: 45,
            colorBorder: '#ccc',
        },
        Input: {
            controlHeight: 45,
            activeShadow: 'none',
            colorBorder: '#ccc',
        }

      },
    }}
  >
    {children}
  </ConfigProvider>
  )
}

export default ThemeProvider