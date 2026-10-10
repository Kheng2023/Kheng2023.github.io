export interface MedicalRole {
  role: string
  place: string
  period: string
  summary: string
  achievements: string[]
}

export const medicalRoles: MedicalRole[] = [
  {
    role: 'Houseman (Trainee Doctor)',
    place: 'Hospital Kulim, Kedah',
    period: '2014 – 2016',
    summary:
      'Two-year rotational training across six core departments: Orthopaedics, Internal Medicine, Obstetrics & Gynaecology, Emergency, Paediatrics, and Surgery.',
    achievements: [
      'Conducted patient history-taking, daily ward rounds, and reviewed test results with supervising doctors.',
      'Performed phlebotomy, vaginal deliveries, suturing, IV line insertions, urinary catheterization, and minor surgical interventions.',
      'Assisted medical officers and specialists in major surgical procedures.',
    ],
  },
  {
    role: 'Medical Officer',
    place: 'Penang General Hospital',
    period: '2016 – 2018',
    summary:
      'Obstetrics & Gynaecology Department — managed complex high-risk cases in a high-pressure hospital environment.',
    achievements: [
      'Managed high-risk pregnancies, labour, and emergency deliveries.',
      'Performed over 50 C-sections and assisted in gynaecological surgeries.',
      'Conducted over 1,000 transabdominal ultrasounds for obstetric and gynaecological patients.',
      'Supervised and mentored house officers, ensuring smooth clinic operations.',
      'Facilitated the 2017 Maternal-Fetal Medicine Conference in Malaysia.',
    ],
  },
  {
    role: 'General Practitioner',
    place: 'Dr. (Mdm) Ooi Clinic, Penang, Malaysia',
    period: '2018 – 2022',
    summary: 'Provided comprehensive medical care in a busy community clinic setting.',
    achievements: [
      'Diagnosed and managed a wide range of medical conditions.',
      'Conducted patient consultations, examinations, and follow-up care.',
      'Ordered and interpreted lab tests to guide treatment decisions.',
      'Handled administrative responsibilities, ensuring efficient clinic operations.',
    ],
  },
]
