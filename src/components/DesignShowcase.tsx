interface DesignImageProps {
  title: string;
  description: string;
  imageUrl: string;
}

const designs: DesignImageProps[] = [
  {
    title: 'Trang Quản Trị',
    description: 'Bảng điều khiển chính với các chỉ số quan trọng và thao tác nhanh',
    imageUrl: '/placeholder.png',
  },
  {
    title: 'Danh Sách Xe',
    description: 'Xem và tìm kiếm xe với các bộ lọc đa dạng',
    imageUrl: '/placeholder.png',
  },
  {
    title: 'Quy Trình Đặt Xe',
    description: 'Đơn giản hóa quá trình đặt xe với lịch trực quan',
    imageUrl: '/placeholder.png',
  },
  {
    title: 'Hồ Sơ Người Dùng',
    description: 'Quản lý tài khoản và lịch sử thuê xe',
    imageUrl: '/placeholder.png',
  },
];

export function DesignShowcase() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
      {designs.map((design, index) => (
        <div
          key={index}
          className='overflow-hidden rounded-lg border bg-background shadow-sm hover:shadow-md transition-shadow'
        >
          <div className='aspect-video overflow-hidden'>
            <img
              src={design.imageUrl}
              alt={design.title}
              className='h-full w-full object-cover transition-transform hover:scale-105'
            />
          </div>
          <div className='p-4'>
            <h3 className='font-semibold text-primary'>{design.title}</h3>
            <p className='text-sm text-muted-foreground'>{design.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
