describe('login', () => {
 it('login', () => {
  cy.visit('https://member.sys9.co/')
  cy.wait(2000)
  cy.get('[href="/auth?method=login"] > .mantine-focus-auto').click()
  cy.wait(2000)  //รอมันสร้างหน่อย
  cy.contains('รหัสผ่าน').click()
  cy.wait(2000)
  cy.get('#theme-normal > div > div > form > div:nth-child(1) > div.mt-4 > div.m_46b77525.mantine-InputWrapper-root.mantine-TextInput-root > div')
    .type('0979785214')
  cy.get('#theme-normal > div > div > form > div:nth-child(1) > div.mt-4 > div.m_f61ca620.mantine-PasswordInput-root.m_46b77525.mantine-InputWrapper-root.mantine-PasswordInput-root > div > div.m_ccf8da4c.m_8fb7ebe7.mantine-Input-input.mantine-PasswordInput-input')
    .type('1234567890')
  cy.get('#theme-normal > div > div > form > div:nth-child(1) > div.mt-4 > button > span').click()
  cy.wait(2000)


  //เข้าคาเฟ่
  cy.get('#theme-normal > div > div:nth-child(2) > div > div > div > div > div > div > a').click() 
  cy.wait(2000)
  
  //เลือกสินค้า
  cy.get('.shrink-0 > .mantine-focus-auto').click()
  cy.get(':nth-child(2) > a > .pb-1').click() ///อเมริกาโน่ปั่น (Americano)
  cy.wait(2000)
  cy.get(':nth-child(1) > .col-span-12 > :nth-child(2) > .title').click() //ธรรมดา
  cy.get(':nth-child(2) > .col-span-12 > :nth-child(3) > .title').click() //ไม่เพิ่ม Topping
  cy.get('.grid > :nth-child(1) > .mantine-focus-auto').click()
  cy.wait(2000)

  //หน้าตะกร้า
  cy.get('a[alt="ตะกร้าสินค้า cart"]').click();
  cy.wait(2000)
  cy.get('#theme-normal > div.fixed.bottom-0.left-0.w-full.bg-white.py-4.z-50.shadow-lg.border-t.border-gray-300 > div > div > div > div > div.text-right.flex.flex-row.items-center.text-sm > div:nth-child(2) > a > button').click()
  cy.wait(2000) //สั่ง
  cy.get(':nth-child(3) > .pt-3 > .flex > :nth-child(2) > .text-blue-500').click() //เลือกวันที่
  cy.wait(2000)
  cy.contains('ตกลง').click()
  cy.get('.py-4 > .flex-wrap > :nth-child(2)').click() //ชำระเงินที่ร้าน
  cy.contains('สั่งสินค้า').click()
  cy.wait(2000)
  cy.contains('รับทราบ').click();
  
  })

})

  


