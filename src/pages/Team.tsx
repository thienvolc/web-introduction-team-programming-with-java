import { TeamMember } from '../components/TeamMember';
export function Team() {
  const teamMembers = [{
    name: 'TS. Tạ Việt Hương',
    role: 'Giảng Viên Hướng Dẫn',
    imageUrl: '/avt-Mentor.png',
    bio: 'Cố vấn và hướng dẫn phát triển dự án.'
  },{
    name: 'Võ Lưu Chí Thiện',
    role: 'Trưởng Nhóm',
    imageUrl: '/avt-Chi_Thien.png',
    bio: 'Chịu trách nhiệm quản lý dự án và phát triển frontend với Nextjs.'
  }, {
    name: 'Nguyễn Trường Vũ',
    role: 'Backend Developer',
    imageUrl: '/avt-Truong_Vu.png',
    bio: 'Phát triển backend với Spring Boot.'
  }, {
    name: 'Đặng Hữu Thọ',
    role: 'Business Analyst',
    imageUrl: '/avt-Huu_Tho.png',
    bio: 'Phân tích thiết kế hệ thống'
  }, {
    name: 'Trần Tuấn Minh',
    role: 'Backend Developer',
    imageUrl: '/avt-Tuan_Minh.png',
    bio: 'Phát triển API và quản lý cơ sở dữ liệu.'
  }];
  return <div className="w-full bg-background py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
              Thành Viên Nhóm
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Đội ngũ phát triển Hệ Thống Quản Lý Thuê Xe
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => <TeamMember key={index} name={member.name} role={member.role} imageUrl={member.imageUrl} bio={member.bio} />)}
        </div>
        <div className="mt-16 p-6 bg-muted rounded-2xl">
          <h2 className="text-2xl font-bold mb-4 text-primary">
            Thỏa Thuận Nhóm
          </h2>
          <ul className="space-y-3 text-muted-foreground">
            <li>• Tham gia đầy đủ các cuộc họp nhóm</li>
            <li>• Hoàn thành công việc đúng thời hạn</li>
            <li>• Tích cực đóng góp ý kiến xây dựng</li>
            <li>• Hỗ trợ các thành viên khi cần thiết</li>
            <li>• Tuân thủ quy trình phát triển đã thống nhất</li>
          </ul>
        </div>
      </div>
    </div>;
}