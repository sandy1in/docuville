const dlVariants = ['DL', 'dl', 'dL', 'Dl'];

const noVariants = ['No', 'NO', 'nO', 'no', 'No.', 'NO.', 'nO.', 'no.'];

const validTillVariants = [
        'Valid Till', 'VALID TILL', 'Valid Till.', 'Valid Till :', 'Valid',
        'Till', 'VALID TILL.', 'VALID TILL :', 'Valid TILL',
        'VALID UNTIL', 'VALID UNTIL.', 'VALID TILL IS', 'Validity',
        'Valid Till', 'Valid until', 'VALID UNTIL', 'VALID UNTIL :', "Yalid Till",
        'ya1id till', 'va1id till'
    ]

const nameVariants = [
        'Name', 'NAME', 'Name :', 'NAME :', 'Name :',
        'NAME:', 'NAME  :', 'Name  :', 'NAMES', 'NAMES:',
        'NAMES  :', 'First Name', 'First name', 'Last Name',
        'Last name', 'Given Name', 'SURNAME', 'Surname'
    ]

const dropVariations = [
        'sdm', 'SDM', 's d m', 's.d.m', 'sd', 'sdm.', 'sdm,', 's d m.', 's.d.m.', 's d m,', 'S D M', 's d m w', 's.d.m.w',
        'sdmw', 'SDMW', 's d m w', 's.d.m.w', 'sdmw.', 'sdmw,', 's d m w.', 's.d.m.w.', 'S D M W', 's d m', 's.d.m',
        'sdw', 'SDW', 's d w', 's.d.w', 'sd', 'sdw.', 'sdw,', 's d w.', 's.d.w.', 's d w,', 'S D W', 
        'sdw:', 'S.D.W', 'S.D.W.', 's d w:', 's d-w', 's-d-w', 'S-D-W', 's.dw',
        'ro', 'RO', 'r o', 'r.o', 'r0', 'ro.', 'ro,', 'R O', 'R0', 'r o.', 'r o,', 'r.o.', 'R.O'
    ];

export { dlVariants , noVariants , validTillVariants , nameVariants , dropVariations }